var db = require('../dbconnection');

var trainer = {
    
    getmytrainings:function(name,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from training where trainer=?",[name], callback);
    },

    getsearchtrainings:function(searchText,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from training where title like ? and trainer=?",['%' + searchText.searchText + '%',searchText.username], callback);
    },

    getTraining:function(id,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from training where id=?",[id], callback);
    },

    addScenario:function(scenario, callback){
        return db.query("insert into scenarios (scname,isCovered,trainingId) values (?,?,?)",
        [scenario.desc,'No',scenario.trid], callback);
    },

    getScenarios:function(id,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from scenarios where trainingId=?",[id], callback);
    },

    getCScenarios:function(id,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from scenarios where trainingId=? and iscovered=?",[id,'Yes'], callback);
    },

    getNCScenarios:function(id,callback){
       // console.log('Text :'+searchText);
        return db.query("select * from scenarios where trainingId=? and iscovered=?",[id,'No'], callback);
    },

    updateScenario:function(sc,callback){
       // console.log('Text :'+searchText);
        return db.query("update scenarios set iscovered=? where id=?",['Yes',sc.id], callback);
    },

    updateTraining:function(tr,callback){
       // console.log('Text :'+searchText);
        return db.query("update training set isComplete=? where id=?",['Yes',tr.id], callback);
    },
};

module.exports = trainer;