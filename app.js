const mongoose = require("mongoose");


// Database connection
mongoose.connect('mongodb://localhost:27017/warmane');

// Item model
const Items = mongoose.model('items', {
    itemID: { type: Number }
});


function itemFinder(itemToFind) {
    return new Promise((resolve, reject) => {
        let itemRetorno = {};
        Items.find({ itemID: itemToFind }, (err, ret) => {
            if (err){
                console.log(err);
            }
            else{
                itemRetorno.classe =ret[0].get('class');
                itemRetorno.subclass =ret[0].get('subclass');
                itemRetorno.gearscore =ret[0].get('GearScore');
                console.log('3')
                resolve(itemRetorno);
            }   
        })
    })
}

const deathRoll = async (name) => {
    chatMsg.channel.send(`Lets Roll?`);
    await delay(2000);
    chatMsg.channel.send(`Nope.`);
    await delay(2000);
    chatMsg.channel.send(`ITS DEATH ROLL!!`);
    await delay(2000);
    chatMsg.channel.send(`X9 - Warmane rolls 76 (1-100)`);
    await delay(2000);
    chatMsg.channel.send(`${name} rolls 15 (1-76)`);
    await delay(2000);
    chatMsg.channel.send(`X9 - Warmane rolls 7 (1-15)`);
    await delay(2000);
    chatMsg.channel.send(`${name} rolls 4 (1-7)`);
    await delay(2000);
    chatMsg.channel.send(`X9 - Warmane rolls 2 (1-4)`);
    await delay(2000);
    chatMsg.channel.send(`${name} rolls 1 (1-2)`);
    await delay(2000);
    chatMsg.channel.send(`${name} lose. Trade the winner!!`);
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));



//////////////////////////////////////////
// SETTINGS - CHANGE THESE ACCORDINGLY
const mongo_username = "ENTER_MONGODB_USERNAME_HERE";
const mongo_password = "ENTER_MONGODB_PASSWORD_HERE";
const mongo_database = "ENTER_MONGODB_DATABASE_HERE";
const discord_bot_id = "MTAxNjE2ODE2MDEwNzQzMDA1MA.G6n7Rw.qMBdwFPu7hOqgspvYKW2RFB98mFwWygVecQl8Y";
//////////////////////////////////////////

const cheerio = require("cheerio");
const request = require("request-promise");
const Discord = require("discord.js");
const client = new Discord.Client();

let chatMsg;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildCreate", (guild) => {
    console.log("Guilds:");
    client.guilds.forEach((guild) => {
        console.log(guild.name);
    });
});

client.on('message', msg => {
    chatMsg = msg;
    if (chatMsg.content[0] === "!") {
        let command = chatMsg.content.split(" ")[0].substring(1);
        let name = chatMsg.content.split(" ")[1];

        if(name == 'Annehathaway') {
            chatMsg.channel.send(`⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⠿⠛⠿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠉⠄⣀⡤⢤⣤⣈⠁⣠⡔⠶⣾⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠁⠄⠄⠄⣼⣿⠁⡀⢹⣿⣷⢹⡇⠄⠎⣿⣿⣿
            ⣿⣿⣿⠿⠛⠉⠁⠄⠄⠄⠄⠄⠄⠄⠹⣇⣀⣡⣾⣿⡿⠉⠛⠒⠒⠋⠉⢸
            ⡿⠋⠁⠄⠄⢀⣤⣤⡀⠄⠄⠄⠄⠄⠄⠈⠙⠛⠛⠉⠄⠄⠄⠄⠄⠄⠄⠈
            ⠄⠄⠄⠄⠄⢹⣧⡈⠿⣷⣄⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⢄⣾
            ⠄⠄⠄⠄⠄⠈⠻⢿⣶⣌⣙⡛⠛⠿⠶⠶⠶⠶⠶⠖⣒⣒⣚⣋⡩⢱⣾⣿
            ⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠛⠛⠛⠻⠿⠿⠟⠛⠛⠛⠉⢉⣥⣶⣾⣿⣿⣿
            ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠒⠶⣿⣿⣿⣿⣿⣿⣿⣿
            ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿
            ⣿⡿⠛⠛⠛⢻⣿⠿⠛⠛⠛⢿⣿⣿⡿⠛⠛⠛⢻⡟⠛⣿⡿⠛⣻⣿⣿⣿
            ⡟⠄⣼⣿⣿⣿⡇⠄⣾⣿⣧⠄⢻⡏⠄⣼⣿⣿⣿⡇⠄⡟⢀⣴⣿⣿⣿⣿
            ⡇⠄⣿⣿⣿⣿⡄⠄⣿⣿⣿⠄⢸⡇⠄⣿⣿⣿⣿⡇⠄⣀⠈⢻⣿⣿⣿⣿
            ⣿⣄⠈⠙⠛⢻⣧⡄⠙⠛⠉⣠⣿⣷⣄⠈⠙⠛⢹⡇⠄⣿⣧⠄⠻⣿⣿⣿`);
            return;
        }

        if(name == 'Violety' || name == 'Estrupicia' || name == 'Handrikkin' || name == 'Gatinha') {
            deathRoll(name);
            return;
        }

        const commands = {
            "guild": () => {
                getGuild(name, chatMsg);
            },
            "gs": () => {
                getGearScore(name).then(character => {
                    chatMsg.channel.send(`${getName(name)}'s GearScore is ${character.GearScore}`);
                })
            },
            "ench": () => {
                getEnchants(name).then(message => {
                    chatMsg.channel.send(message);
                })
            },
            "gems": () => {
                getGems(name).then(message => {
                    chatMsg.channel.send(message);
                })
            },
            "armory": () => {
                getArmory(name).then(message => {
                    chatMsg.channel.send(message);
                })
            },
            "summary": () => {
                getGearScore(name).then(character => {
                    getEnchants(name).then(enchants => {
                        getGems(name).then(gems => {
                            getArmory(name).then(armory => {
                                chatMsg.channel.send(`
    Here is a summary for **${getName(name)}**:
    **Status**: ${character.online ? "Online" : "Offline"}
    **Character**: ${"Level " + character.level + " " + character.race + " " + character.class + " - " + character.faction}
    **Guild**: ${character.guild}
    **Specs**: ${character.talents.map(talent => talent.tree).join(" and ")}
    **Professions**: ${character.professions.map(profession => (profession.skill + " " + profession.name)).join(" and ")}
    **Achievement points**: ${character.achievementpoints}
    **Honorable kills**: ${character.honorablekills}
    **GearScore**: ${character.GearScore}
    **Enchants**: ${enchants}
    **Gems**: ${gems}
    **Armory**: ${armory}
                             `);
                            });

                        });
                    });
                });
            }

        }

        if (typeof commands[command] === "function") {
            //If the command sent is actually a command, execute it!
            commands[command]();
        }
    }
});

class Character {
    constructor(charName) {
        this.request = request(`http://armory.warmane.com/api/character/${getName(charName)}/Icecrown/`, (err, response, body) => {
            body = JSON.parse(body);
            this.name = body.name;
            this.realm = body.realm;
            this.online = body.online;
            this.level = body.level;
            this.faction = body.faction;
            this.gender = body.gender;
            this.class = body.class;
            this.honorablekills = body.honorablekills;
            this.guild = body.guild;
            this.achievementpoints = body.achievementpoints;
            this.equipment = body.equipment;
            this.race = body.race;
            this.talents = body.talents;
            this.professions = body.professions;
        });
    }
}

function getGuild(name, chatMsg) {
    var character = new Character(name);
    character.request.then(_ => {
        let guild = character.guild
        if (guild === "") {
            chatMsg.channel.send("No guild found");
        } else if (guild) {
            chatMsg.channel.send(guild);
        } else {
            chatMsg.channel.send("Did you type the right name?");
        }
    });
}

function getGearScore(name) {
    var character = new Character(name);
    var gearscore = 0;
    return new Promise((resolve, reject) => {
        character.request.then(_ => {
            var itemsToFind = [];
            if (character.equipment) {
                character.equipment.forEach(item => {
                    itemsToFind.push({
                        "itemID": Number(item.item)
                    });
                });

                Items.find({ $or: itemsToFind }, (err, items) => {
                    let weapons = [];                   
                    items.forEach(item => {
                        let classe = item.get('class');
                        let subclass = item.get('subclass');
                        let itemGs = item.get('GearScore');

                        if (classe === 2 && (subclass === 1 || subclass === 5 || subclass === 8)) {
                            weapons.push(itemGs);
                        } else {
                            gearscore += itemGs;
                        }
                    });
                    // Probably a warrior with Titan's Grip
                    if (weapons.length == 2) {
                        gearscore += Math.floor(((weapons[0] + weapons[1]) / 2));
                    } else if (weapons.length == 1) {
                        gearscore += weapons[0];
                    }
                    character.GearScore = gearscore;
                    resolve(character);
                });
            } else {
                chatMsg.channel.send(`${getName(name)} does not have any items equipped. Maybe you typed the wrong name?`);
            }

        });
    });
}

function getParams(params) {
    params = params.split("&");
    var paramsMap = {};
    params.forEach(function (p) {
        var v = p.split("=");
        paramsMap[v[0]] = decodeURIComponent(v[1]);
    });
    return paramsMap;
};

function getGems(name) {
    const itemNames = ["Head", "Neck", "Shoulders", "Cloak", "Chest", "Shirt", "Tabard", "Bracer", "Gloves", "Belt", "Legs", "Boots", "Ring #1", "Ring #2", "Trinket #1", "Trinket #2", "Main-hand", "Off-hand", "Ranged"];
    let missingGems = [];
    const options = {
        uri: `http://armory.warmane.com/character/${getName(name)}/Icecrown/`,
        transform: function (body) {
            return cheerio.load(body);
        }
    };

    return new Promise((resolve, reject) => {
        var itemIDs = [];
        var actualItems = [];
        var i = 0;
        request(options).then(($) => {
            $(".item-model a").each(function () {
                var rel = $(this).attr("rel");
                if (rel) {
                    var params = getParams(rel);
                    if (params["gems"]) {
                        var amount = params["gems"].split(":").filter(x => x != 0).length;
                    } else {
                        var amount = 0;
                    }

                    itemIDs.push({
                        "itemID": Number(params["item"])
                    });

                    actualItems.push({
                        "itemID": Number(params["item"]),
                        "gems": amount,
                        "type": itemNames[i]
                    });
                }
                i++;
            });
            // var foundItem = actualItems.filter(x => x.itemIdGet == actualItems[0].itemID);
                Items.find({ $or: itemIDs }, (err, items) => {
                    items.forEach(item => {
                        let itemIdGet = item.get('itemID');
                        let itemGems = item.get('gems')
                        var foundItem = actualItems.filter(x => x.itemID == itemIdGet);
                        console.log(actualItems)
                        if (foundItem[0].type == "Belt") {
                            if ((itemGems + 1) != foundItem[0].gems) {
                                missingGems.push(foundItem[0].type);
                            }
                        } else {
                            console.log('itemIdGet',itemIdGet, 'foundItem',foundItem[0].gems)
                            if (itemGems != foundItem[0].gems) {
                                missingGems.push(foundItem[0].type);
                            }
                        }

                    });
                    if (missingGems.length === 0) {
                        resolve(`${getName(name)} has gemmed all his items!`);
                    } else {
                        resolve(`${getName(name)} needs to gem ${missingGems.join(", ")}`);
                    }
                });
        });
    });
}

function getEnchants(name) {
    const itemNames = ["Head", "Neck", "Shoulders", "Cloak", "Chest", "Shirt", "Tabard", "Bracer", "Gloves", "Belt", "Legs", "Boots", "Ring #1", "Ring #2", "Trinket #1", "Trinket #2", "Main-hand", "Off-hand", "Ranged"];
    const bannedItems = [1, 5, 6, 9, 14, 15];
    var missingEnchants = [];

    const options = {
        uri: `http://armory.warmane.com/character/${getName(name)}/Icecrown/`,
        transform: function (body) {
            return cheerio.load(body);
        }
    };

    return new Promise((resolve, reject) => {
        request(options).then(($) => {
            var items = [];
            var characterClass = $(".level-race-class").text().toLowerCase();
            let professions = [];
            $(".profskills").find(".text").each(function (profession) {
                professions.push($(this).clone().children().remove().end().text().trim());
            });
            $(".item-model a").each(function () {
                var item = $(this).attr("href");
                var rel = $(this).attr("rel");
                items.push(rel);
            });

            for (i = 0; i < items.length; i++) {
                if (items[i]) {
                    if (!bannedItems.includes(i)) {
                        if (items[i].indexOf("ench") == -1) {
                            if (itemNames[i] === "Ranged") {
                                if (characterClass.indexOf("hunter") >= 0) {
                                    missingEnchants.push(itemNames[i]);
                                }
                            } else if (itemNames[i] === "Ring #1" || itemNames[i] === "Ring #2") {
                                if (professions.includes("Enchanting")) {
                                    missingEnchants.push(itemNames[i]);
                                }
                            } else if (itemNames[i] === "Off-hand") {
                                if (characterClass.indexOf("mage") < 0 && characterClass.indexOf("warlock") < 0 && characterClass.indexOf("druid") < 0 && characterClass.indexOf("priest") < 0) {
                                    missingEnchants.push(itemNames[i]);
                                }
                            } else {
                                missingEnchants.push(itemNames[i]);
                            }
                        }
                    }
                }
            };
            if (missingEnchants.length === 0) {
                resolve(`${getName(name)} has all enchants!`);
            } else {
                resolve(`${getName(name)} is missing enchants from: ${missingEnchants.join(", ")}`);
            }
        });
    });
}

function getArmory(name) {
    return new Promise((resolve, reject) => {
        resolve(`${getName(name)}'s Armory link: http://armory.warmane.com/character/${getName(name)}/Icecrown/`);
    });
}

function getName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

//Release
client.login(discord_bot_id);
