window.alert("Welcome to Robot Galdiators");
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0){
        //Alert players that the round is starting
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes true leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //Subtract the Vaule of playerAttack from the value of enemyHealth and use resultto update enemyHealth variable
        enemyHealth = enemyHealth - playerAttack;
        //Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has been defeated under the flags of your victory!");
            
            //award player money for winning
            playerMoney = playerMoney + 20;

            //Leave while() loop since enemy dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
            
        //Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
        playerHealth = playerHealth - enemyAttack;
        //Log a resulting message to the console so we know it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
            
};

var startGame = function() {
    //reset player health
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    //Fight each enemy-robot by looping over them and fighting them one at a time
    for (var i = 0; i < enemyNames.length; i++) {
        //if player is still alive, keep fighting
        if(playerHealth > 0) {
            //let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
            
            //pick new enemy to fight based on the index of the enemyName array
            var pickedEnemyName = enemyNames[i];

            //reset enemyHealth before starting new fight
            enemyHealth = 50;

            ///debugger;

            //pass the pickedEnemyName var value into the fight
            fight(pickedEnemyName);

            //if player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                // ask if player would like to enter the shop
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // if yes, take them to the store() function;
                if (storeConfirm) {
                    shop();  
                }

            }
        } else {
            window.alert("You have lost your robot in battle! GAME OVER");
            break;
        }        
    }  
    // play again
    endGame();  
};

var endGame = function() {
    window.alert("The game has now ended. let's see how you did!");

    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now hwave a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    // ask if player would like to play againb
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    };
};

// go to shop between battles function
var shop = function() {
    // ask playyer what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL you health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney > 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increasing health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "upgrade":
        case "UPGRADE":
            if (playerMoney > 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increaing player's attack and decreasing players money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }

            break;
        case "leave":
        case "LEAVE":
            window.alert("Leaving the store.");
            // Do nothing, so function wil end
            break;
        default:
            window.alert("you did not pick a valid option. Try again.");

            // Call shop againt to force player to pick vaild option
            shop();
            break;
    }
};



//start game when page loads
startGame();
