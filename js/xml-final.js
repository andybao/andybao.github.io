var sign_in_obj;
var user_info_obj;
var user_name_obj;
var questions_obj;

function init() {
    sign_in_obj = $('#google-sign-in');
    user_info_obj = $('#user-info');
    user_name_obj = $('#user-name');
    questions_obj = $('#questions');
}

function onSignIn(googleUser) {
    init();
    var profile = googleUser.getBasicProfile();
    var user_name = profile.getGivenName();

    sign_in_obj.addClass('invisible');
    user_name_obj.text(user_name);
    user_info_obj.removeClass('invisible');
    questions_obj.removeClass('invisible');

    displayQuestion();
}

function signOut() {
    init();
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    sign_in_obj.removeClass('invisible');
    user_info_obj.addClass('invisible');
    questions_obj.addClass('invisible');
}

function newQuestion() {
    displayQuestion();
}

function displayQuestion() {
    var questionObj = getObjFromJson();
    var question = questionObj.results[0].question;
    question = question.replace(/&quot;/g,'"');
    question = question.replace(/&#039;/g,"'");
    var answer = questionObj.results[0].correct_answer;
    answer = answer.replace(/&quot;/g,'"');
    answer = answer.replace(/&#039;/g,"'");
    $('#question').text(question);
    $('#answer').text(answer);
}

function getObjFromJson(){

    var url = 'https://opentdb.com/api.php?amount=1&category=18&type=multiple';

    var http = new XMLHttpRequest(); // a new request

    http.open('GET',url,false);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.send();

    return JSON.parse(http.responseText);
}