names = [
    {
        "name": "Ville",
        "amount": 24
    },
    {
        "name": "Anna",
        "amount": 6
    },
    {
        "name": "Antti",
        "amount": 22
    },
    {
        "name": "Sanna",
        "amount": 5
    },
    {
        "name": "Mikko",
        "amount": 19
    },
    {
        "name": "Minna",
        "amount": 5
    },
    {
        "name": "Timo",
        "amount": 18
    },
    {
        "name": "Satu",
        "amount": 5
    },
    {
        "name": "Tuomas",
        "amount": 16
    },
    {
        "name": "Tiina",
        "amount": 5
    },
    {
        "name": "Tero",
        "amount": 15
    },
    {
        "name": "Kati",
        "amount": 5
    },
    {
        "name": "Sami",
        "amount": 15
    },
    {
        "name": "Henna",
        "amount": 4
    },
    {
        "name": "Mika",
        "amount": 12
    },
    {
        "name": "Liisa",
        "amount": 4
    },
    {
        "name": "Janne",
        "amount": 12
    },
    {
        "name": "Paula",
        "amount": 4
    },
    {
        "name": "Petri",
        "amount": 11
    },
    {
        "name": "Suvi",
        "amount": 4
    }
]

function compareAlphabetically(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

function compareAmounts(a, b) {
    if (a.amount < b.amount) {
        return 1;
    }
    if (a.amount > b.amount) {
        return -1;
    }
    return 0;
}

function countNames(list) {
    var totalCount = 0;
    for (let i = 0; i < list.length; i++) {
        totalCount = totalCount + list[i].amount;
    }
    return totalCount;
}

exports.index = function (req, res, next) {
    return res.render('index', { nameList: names });
};

exports.namesByAmount = function (req, res, next) {
    names.sort(compareAmounts);
    return res.sendFile(path.resolve(__dirname, '../client/build'));
};

exports.namesByAlphabetical = function (req, res, next) {
    names.sort(compareAlphabetically);
    return res.json({ nameList: names });
};

exports.namesCount = function (req, res, next) {
    var names_in_list = countNames(names);
    return res.json({ count: names_in_list });
}

exports.findByName = function(req,res,next) {
    console.log(req.body.name);
    var found = names.find(element => element.name === req.body.name);
    if (found === undefined) {
        return res.json({ count: 0});
    }
    return res.json({ count : found.amount});
}