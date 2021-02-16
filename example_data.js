var shuffleSequence = seq("intro", sepWith("sep", seq("practice", shuffle(randomize("f"),
                            shuffle(randomize("s1"),
                                    randomize("s2"))))))
                                           
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Подождите, сейчас появится следующее предложение",
        errorMessage: "Будьте внимательнее с ответами. Подождите, сейчас появится следующее предложение"
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Для ответа используйте клавиши на клавиатуре или нажимайте на квадраты с нужным числом",
        leftComment: "(Плохо)", rightComment: "(Хорошо)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //
    //["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //
    //["setcounter", "__SetCounter__", { }],

    // NOTE: You could also use the 'Message' controller for the experiment intro (this provides a simple
    // consent checkbox).

    ["intro", "Form", {
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

    //
    // practice items for self-paced reading (one with a comprehension question).
    //
    ["practice", "AcceptabilityJudgment", {s: "Это тренировочное предложение, вы можете его оценить, выбрав один из вариантов. После оценки предложения будет появляться вопрос на понимание"},
                 "Question", {hasCorrect: false, randomOrder: false,
                              q: "Так будут выглядеть вопросы на понимание. Нужно будет выбрать один из трех вариантов ответа. После ответа вы перейдете к основной части эксперимента.",
                              as: ["Нажмите 1 на клавиатуре или прямо на этот ответ",
                                   "Нажмите 2 на клавиатуре или прямо на этот ответ",
                                   "Нажмите 3 на клавиатуре или прямо на этот ответ"]}],

    //8 sentences
    // Two "real" (i.e. non-filler) self-paced reading items with corresponding acceptability judgment items.
    // There are two conditions.
    //

    [["s1",1], "AcceptabilityJudgment", {s: "Вы когда летом тут снова будете, я вам этой малины насобираю."},
               "Question",       {q: "В какое время они снова будут:", as: ["летом", "зимой", "осенью"]}],
    [["s2",1], "AcceptabilityJudgment", {s: "Вы когда летом тут снова будете, я вам малины насобираю."},
               "Question",       {q: "В какое время года они снова будут?", as: ["летом", "зимой", "осенью"]}],


    [["s1",2], "AcceptabilityJudgment", {s: "В первый же вечер Тверязов устроил грандиозное застолье, наприглашав соседей."},
               "Question",       {q: "Что устроил Тверязов", as: ["застолье", "праздник","ужин"]}],
    [["s2",2], "AcceptabilityJudgment", {s: "В первый же вечер Тверязов устроил грандиозное застолье, наприглашав их."},
               "Question",       {q: "Что устроил Тверязов?", as: ["застолье","праздник","ужин"]}],
    //
    //
    [["s1",3], "AcceptabilityJudgment", {s: "Напокупают своих телефонов и фотографируют все подряд"},
               "Question",       {q: "Что купили:", as: ["телефоны", "ноутбуки", "фотоаппараты"]}],
    [["s2",3], "AcceptabilityJudgment", {s: "Напокупают телефонов и фотографируют все подряд"},
               "Question",       {q: "Что купили:", as: ["телефоны", "ноутбуки", "фотоаппараты"]}],
    [["s1",4], "AcceptabilityJudgment", {s: "Он напридумывал себе страхов."},
               "Question",       {q: "Чего он напридумывал?", as: ["страхов", "задач", "проблем"]}],
    [["s2",4], "AcceptabilityJudgment", {s: "Он напридумывал себе этих страхов."},
               "Question",       {q: "Чего он напридумывал?", as: ["страхов", "задач", "проблем"]}],
    
    [["s1",5], "AcceptabilityJudgment", {s: "В конце года мы наварили варенья и стали ходить друг к другу в гости пробовать"},
               "Question",       {q: "Что сварили в конце года?", as: ["варенье", "суп", "компот"]}],
    [["s2",5], "AcceptabilityJudgment", {s: "В конце года мы наварили нашего варенья и стали ходить друг к другу в гости пробовать"},
               "Question",       {q: "Что сварили в конце года?", as: ["варенье", "суп", "компот"]}],
    [["s1",6], "AcceptabilityJudgment", {s: "Я же страшно возмутился и наговорил другу этих неприятных слов"},
               "Question",       {q: "Кому наговорили неприятных слов", as: ["другу", "сыну", "брату"]}],
    [["s2",6], "AcceptabilityJudgment", {s: "Я же страшно возмутился и наговорил другу неприятных слов"},
               "Question",       {q: "Кому наговорили неприятных слов", as: ["другу", "сыну", "брату"]}],
    [["s1",7], "AcceptabilityJudgment", {s: "Наловили в три удочки жалких пескарей, мелочь, только кошке на корм"},
               "Question",       {q: "Кого наловили", as: ["пескарей", "щук", "окуней"]}],
    [["s2",7], "AcceptabilityJudgment", {s: "Наловили в три удочки этих жалких пескарей, мелочь, только кошке на корм"},
               "Question",       {q: "Кого наловили", as: ["пескарей", "щук", "окуней"]}],
    [["s1",8], "AcceptabilityJudgment", {s: "Я нарассказывал про себя увлекательных историй, чтобы впечатлить публику"},
               "Question",       {q: "Чего я нарассказывал", as: ["историй", "рассказов", "стихов"]}],
    [["s2",8], "AcceptabilityJudgment", {s: "Я нарассказывал про себя моих увлекательных историй, чтобы впечатлить публику"},
               "Question",       {q: "Чего я нарассказывал", as: ["историй", "рассказов", "стихов"]}],
    
    //
    // 16 self-paced-reading filler sentences.
    //

    ["f", "AcceptabilityJudgment", {s: "Гости рады то, что им ответили на все интересующие их вопросы"},
          "Question",       {q: "Кто рад ответам на вопросы?", as: ["гости", "друзья", "ученики"]}],
    ["f", "AcceptabilityJudgment", {s: "Поэтому я ограничусь словами, что этот суп, видимо, это на любителя"},
          "Question",       {q: "Что было на любителя", as: ["суп", "второе", "блюдо"]}],
    ["f", "AcceptabilityJudgment", {s: "Когда клуб из-за обилия травм оказался в кризисе, тренер совсем потерял голову"},
          "Question",       {q: "Что оказалось в кризисе", as: ["клуб", "команда", "сборная"]}],
    ["f", "AcceptabilityJudgment", {s: "Итак, ссора началась с разговора о семье"},
          "Question",       {q: "Что началось с разговора о семье", as: ["ссора", "диалог", "расставание"]}],
    ["f", "AcceptabilityJudgment", {s: "Вопреки всем проблемам, концовка романа от этого всего не выглядит менее эффектной"},
          "Question",       {q: "Какой выглядит концовка романа?", as: ["эффектной", "удовлетворяющей", "захватывающей"]}],
    ["f", "AcceptabilityJudgment", {s: "По Вашему описанию у меня складывалось впечатление, что директор обманул нас"},
          "Question",       {q: "Что сделал директор", as: ["обманул", "оштрафовал", "уволил"]}],
    ["f", "AcceptabilityJudgment", {s: "С детьми поставили цели: через три года едем в Лондон"},
          "Question",       {q: "Куда планируют поехать через три года", as: ["В Лондон", "в Москву", "в Париж"]}],
    ["f", "AcceptabilityJudgment", {s: "И он вышел из своего тёплого дома в холодное утро и идёт навстречу другу"},
          "Question",       {q: "Навстречу кому он идет?", as: ["другу", "девушке", "компании"]}],
    ["f", "AcceptabilityJudgment", {s: "Если бы их тоже все можно было экранизировать с этими актерами — получился бы хороший фильм"},
          "Question",       {q: "Какой бы получился фильм?", as: ["хороший", "средний", "отличный"]}],
    ["f", "AcceptabilityJudgment", {s: "Ничего, кроме голубей, не хотел и знать, а гонял их целыми днями"},
          "Question",       {q: "Кого гоняли целыми днями?", as: ["голубей", "птиц", "воробьев"]}],
    ["f", "AcceptabilityJudgment", {s: "Это было праздником Нового Года, когда желание танцевать возникает просто так"},
          "Question",       {q: "Какой был праздник", as: ["Новый Год", "День Рождения", "Рождество"]}],
    ["f", "AcceptabilityJudgment", {s: "Если гость был скуповат, то ему тогда пелись особые песни."},
          "Question",       {q: "Какому гостю пели особые песни", as: ["скуповатым", "щедрым", "всем"]}],
    ["f", "AcceptabilityJudgment", {s: "И сразу я почувствовал и отсутствие портфеля, и испугался, и вспомнил, что портфель остался на работе"},
          "Question",       {q: "Что осталось на работе", as: ["портфель", "сумка", "рюкзак"]}],
    ["f", "AcceptabilityJudgment", {s: "Учителя устали от выполнений одних и тех же действия снова и снова"},
          "Question",       {q: "Кто устал?", as: ["учителя", "преподаватели", "студенты"]}],
    ["f", "AcceptabilityJudgment", {s: "Пока же в Средиземном море строится подводная ферма, на которых будут разводить асцидий"},
          "Question",       {q: "Что строится в Средиземном море", as: ["ферма", "завод", "предприятие"]}],
    ["f", "AcceptabilityJudgment", {s: "У любой картины есть не самые удачные штрихи в ней"},
          "Question",       {q: "У чего есть не самый удачные штрихи", as: ["у картины", "у фильма", "у книги"]}],
    

    
];
