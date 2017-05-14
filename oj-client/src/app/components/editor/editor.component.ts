import { Component, OnInit } from '@angular/core';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  editor: any;
  language: string = 'Java';
  languages: string[] = ['Java', 'C++', 'Python'];
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
  }

  constructor() { }

  ngOnInit() {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.editor.setFontSize(14);

    this.editor.$blockScrolling = Infinity;

    this.resetEditor();
  }

  resetEditor() : void {
    console.log('reset editor');
    if (this.language === 'C++') {
      this.editor.getSession().setMode(`ace/mode/c_cpp`);
    }
    else {
      this.editor.getSession().setMode(`ace/mode/${this.language.toLowerCase()}`);
    }
    this.editor.setValue(this.defaultContent[this.language]);
  }

  setLanguage( language: string ) {
    this.language = language;
    console.log('Chose language: ' + this.language);
    this.resetEditor();
  }

  submit() {
    let userCodes = this.editor.getValue();
    console.log('Submit the code : ' + userCodes);
  }

}
