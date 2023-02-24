// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// const element = document.getElementById('hoge');
// console.log(element.innerText);


// const classes = document.getElementsByClassName('foo');
// for (const classNode of classes) {
//   console.log(classNode.innerText)
// };

const getDomElementModule = (() => {
  
  return {
      getId: (id) => {
          const element = document.getElementById(id);
          console.log(element.innerText);
      },
      getClasses: (className) => {
          const classes = document.getElementsByClassName(className);
          for (const classNode of classes) {
            console.log(classNode.innerText);
        }
      },
    
      submitForm: () => {
        const forms = document.forms.demoForm;
        
        // 値を取得したいimput要素のnameを指定
        const title = forms.title.value;
        const description = forms.description.value;
        
        // Checkboxのうち、選択されている値を取得
        const checkedLanguages = [];
        for (const language of forms.languages) {
          if (language.checked) {
            checkedLanguages.push(language.value)
          }
        }
        
        console.log(
            "タイトル: " + title,
            "説明: " + description,
            "言語: " + checkedLanguages
        )
      }
  }
})();