let orm = require("../config/orm.js");

orm.selectAll("burgers", "devoured", "FALSE");

orm.insertOne("burgers", "burger_name", burger);

orm.updateOne("burgers", "devour", "FALSE", "id", burgerId);

