var countCorrect = 0;
var countIncrorrect = 0;

var wordToTranslate = $('#word');
var correctAnsw = $('#correctAnsw');
var incorrectAnsw = $('#incorrectAnsw');
var currentPosition = $('#currentPosition');
var translation = $('#translation');


var wordsEasy = ['I','Sun','Cold','Pain','Busy','Whole','Mention','Lessons','Persuade','Computer'];
var wordsEasyTranslations = ['Я','Солнце','Холодно','Боль','Занят','Целый','Упомянуть','Уроки','Убедить','Компьютер'];

var wordsMedium = ['Applause','Canny','Context','Efficient','frugality','harass','hybrid','infrastructure','legacy','mandate'];
var wordsMediumTranslations = ['аплодировать','хитрый','контекст','еффективный','бережливость','обижать','гибрид','инфраструктура','наследие','мандат'];

var wordsHard = ['obliterate','improbable','heritage','framework','explicit','ethnic','dominant','conspicuous','vicinity','threshold'];
var wordsHardTranslations = ['Уничтожать','невероятный','наследие','структура','явный','этнический','доминирующий','заметный','окрестность','порог'];

var words = [...wordsEasy];
var wordsTranslations = [...wordsEasyTranslations];


const random = Math.floor(Math.random() * words.length);
var index = 0;
var wordSelected = "";
var wordSelectedTranslation = "";

var SubmitAndChange = function(){
    if(translation.val().length == 0){
        alert("Введите что-то");
        return;
    }
    if(correct()){
        countCorrect +=1;
        console.log("верно")
    }
    else{
        countIncrorrect +=1;
    }
    updateStatus();
    if(words.length == 0){
        var result = "";
        if(countCorrect<1){
            result = "Полный ноль"
        }
        else if(countCorrect<2){
            result = "Нуб "
        }
        else if(countCorrect<3){
            result = "Немного нуб"
        }
        else if(countCorrect<5){
            result = "Среднячок"
        }
        else if(countCorrect<7){
            result = "Не слабый но не сильный"
        }
        else if(countCorrect<8){
            result = "Силач"
        }
        else{
            result = "Лучший"
        }
        alert(`Квест окончен с результатом: ${countCorrect}/10. Ваш уровень английского: ${result}`);
        location.reload();
    }
    goForward();
}



var goForward = function(){

    index = Math.floor(Math.random()*words.length);
    wordSelected = words[index];
    wordSelectedTranslation = wordsTranslations[index];
    wordToTranslate.text(wordSelected.toLowerCase());
    words.splice(index, 1);
    wordsTranslations.splice(index, 1);
    translation.val("");
    
}

var correct = function(){
    console.log(translation.val(),wordSelectedTranslation);
    if(translation.val().toLowerCase() == wordSelectedTranslation.toLowerCase()){
        return true;
    }
    return false;
}
var updateStatus = function(){
    currentPosition.text(countCorrect + countIncrorrect);
    correctAnsw.text(countCorrect);
    incorrectAnsw.text(countIncrorrect);
}

goForward();


$('input[type=radio][name=level]').change(function() {
  if (this.value == 'Easy') {
      alert("Вы поменяли сложность на простую");
      words = [...wordsEasy];
      wordsTranslations = [...wordsEasyTranslations];
  }else if (this.value == 'Middle') {
      alert("Вы поменяли сложность на среднюю");
      words = [...wordsMedium];
      wordsTranslations = [...wordsMediumTranslations];
  }else if (this.value == 'Hard') {
      alert("Вы поменяли сложность на сложную");
      words = [...wordsHard];
      wordsTranslations = [...wordsHardTranslations];
  }
  goForward();
});