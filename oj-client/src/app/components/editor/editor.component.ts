import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  editor: any;
  sessionId: string;
  language: string = 'Java';
  languages: string[] = ['Java', 'C++', 'Python'];
  output: string;
  defaultContent = {
    'Java' : `public class Example {
    public static void main(String[] args) {
      // Type your Java code here

    }
}`,
    'C++': `#include <iostream>
using namespace std;

int main() {
  // Type your C++ code here

  return 0;
}`,
    'Python': `class Solution:
def example():
  # Type your Python code here`
};

  constructor(
    @Inject('collaboration') private collaboration,
    @Inject('data') private data,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sessionId = params['id'];
      this.initEditor();
    })
  }

  initEditor(): void {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.editor.setFontSize(14);

    this.editor.$blockScrolling = Infinity;

    this.resetEditor();

    this.collaboration.init(this.editor, this.sessionId);
    this.editor.lastAppliedChange = null;

    // code change callback
    this.editor.on('change', (delta) => {
      console.log('editor.component Changed: ' + JSON.stringify(delta));
      if (delta != this.editor.lastAppliedChange) {
        this.collaboration.change(JSON.stringify(delta));
      }
    });

    // cursor change callback, getSelection() is a function of editor
    this.editor.getSession().getSelection().on('changeCursor', () => {
      // this will return a JSON including 'row' and 'column'
      let cursor = this.editor.getSession().getSelection().getCursor();
      this.collaboration.cursorMove(JSON.stringify(cursor));
    });

    this.collaboration.restoreBuffer();
  }

  resetEditor(): void {
    console.log('reset editor');
    if (this.language === 'C++') {
      this.editor.getSession().setMode(`ace/mode/c_cpp`);
    }
    else {
      this.editor.getSession().setMode(`ace/mode/${this.language.toLowerCase()}`);
    }
    this.editor.setValue(this.defaultContent[this.language]);
    this.output = "";
  }

  setLanguage(language: string): void {
    this.language = language;
    console.log('Chose language: ' + this.language);
    this.resetEditor();
  }

  submit(): void {
    this.output = ""; // clear previous output
    const userCodes = this.editor.getValue();
    console.log('Submit the code : ' + userCodes);
    const codeToRun = {
      userCodes: userCodes,
      language: this.language.toLocaleLowerCase()
    };
    this.data.buildAndRun(codeToRun)
        .then( res => this.output = res.text );
  }

}
