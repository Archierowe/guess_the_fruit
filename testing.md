# Guess the Fruit - Testing

[See the main README here](README.md)

[Play the game in GitHub pages](https://archierowe.github.io/guess_the_fruit/)

## User stories testing

Working through the user stories section of the [README.md](README.md)

**Player goals**

1. **I want a fun game to play that is easily to understand.**

- The game is vibrant, and colourful. The start game modal appears upon a new game session with simple instructions. However, the game is designed to be simple and intuitive.

<div align="center">
<img src="https://i.ibb.co/DLDh0zZ/Welcome-modal.png" alt="Welcome_modal screenshot" border="0">
</div>

2. **I want/need/require child friendly controls. I need the game controls/buttons to be obvious and 'clickable' - large and colourful buttons to attract my attention.**

- The game controls are obvious and appear in the form of very vibrant and colourful images of fruit - the main 'hero' images.

<div align="center">
   <img src="https://i.ibb.co/ckSYkTT/Fruit-images.png" alt="Fruit_images" border="0">
   </div>

3. **I would like fun sounds and images/visuals.**

- The game has background music that is turn on and off'able'. The control for this is a mute sound button which is intuitive and instantly recognisable as sound on and off icon(s).
<br>
<div align="center">
      <img src="https://i.ibb.co/yBWYKBY/Main-screen.png" alt="Main_screen" border="0">
   </div>
<br>
- The visuals are in the form of colourful fruit which bounce in when a new game starts (when the page is refreshed or the main new game button is pressed/clicked).
<br>
<div align="center">
   <img src="https://media.giphy.com/media/BKeqeH3BNLc06SzgXE/giphy.gif" alt="Fruit_images" border="0">
   </div>

4. **I need to be able to recognise the elements within the game.**

- The visuals are fruits are among the most common and certainly fruit that most children will have seen (and hopefully eaten) before.

5. **I would love visual and audible rewards when I play/win!**

- When a game is 'won' and the hidden fruit is found a win game modal appears giving the player stimulus in the form of a music video to celebrate their win.
<br>
<div align="center">
<img src="https://media.giphy.com/media/2lt4BitVLRtkj8UGC4/giphy.gif" alt="win_fruit_modal" border="0">
   </div>

**Parent goals**

1. **Developmental value.**

- Guess the Fruit provides an experience for the child that is not only fun but educational in a umber of ways...
  - Visual and spatial awareness through the movement of the various elements within the game:
    - The visual rewards upon winning the game offer incentive and encourage concentration.
    - The overall experience encourages interaction and can also provide an element of memory exercising - the player needs to remember which buttons they have alredy tried in guessing the fruit.

2. **Is the game accesible?**

- The game buttons bounce in for the player/child, making it obvious that these buttons are intended for operation of the game.
- Modals offer extra information to the parent - for example the about modal provides the parent with valuable information about the brand Hery Bear Sensory for extra information and potential educational resources.

3. **Is the game fun to play?**

- The game is visually very appealing and colourful, intentional in it's vibrancy and sounds in attracting the player whilst being easy and intuitive.

4. **Is it a loud game? What parental controls are there?**

- Parents can reset the game at anytime via refreshing the page and also a new game button.
- Parents are able to mute the game and control the volume via the main volume output controls for whatever device they are using.

## Manual testing

A detailed account follows of the testing done on mobile devices and tablets (the primary intended device use).

The steps were undertaken on Iphone X and Ipad devices as well as the Chrome Dev tools simulators on portrait mode (intended orientation for the game to allow for all elements to be intuitively accessed by the user). Tablets 768px (portrait) and mobile devices 576px and below (portrait).

1. **Game start/session start modal:**

- The modal fits nicely on tablets and mobile devices.
- Easily readable and colours really stand out.
- The play now button is easily seen and is nicely responsive.
- Once the play noew button is pressed the modal is closed and the main game buttons animate nicely to indicate game start.

2. **Main screen:**

- Confirmed that on mobiles and tablets, the main game screen fits very nicely and is vibrant and colourful. All elements are in place - the game buttons (fruits) display very nicely and fit well, media queries working nicely to shrink where necessary.

**Mobile**
- The main screen as viewed by the user/player:
<br>
<div align="center">
      <img src="https://i.ibb.co/yBWYKBY/Main-screen.png" alt="Main_screen" border="0">
   </div>

**Tablet**
- Seen here on the 'game start' modal:
<br>
<div align="center">
   <img src="https://i.ibb.co/3R1nqVf/Screenshot-2021-08-23-at-09-23-20.png" alt="Screenshot 2021-08-23 at 09.23.20" border="0">
   </div>

**Header elements**

- On mobile, the header elements (about button, results window and the mute button) push nicely to the left - with the mute and about buttons reordering to acomodate for right handed users (most common) - to discourage the mute button being pressed.

<br>
<div align="center">
<img src="https://i.ibb.co/yBWYKBY/Main-screen.png" alt="Main_screen" border="0">
</div>
 <br>
 
- On tablet the header elements display nicely and in original order of: about button, results window and mute button.

<br>
<div align="center">
<img src="https://i.ibb.co/jhp1Lmg/Tablet-main-screen.png" alt="Tablet main screen" border="0"> 
</div>
 <br>
 
- Mute button/unmute button works nicely and provides the game with a 'theme tune'.

- the result window presents the user with basic information - 'select a fruit' - displays nicely on both tablets and mobile devices.

- About button - launches 'about modal'. Working as expected.

<br>
<div align="center">
<img src="https://i.ibb.co/g3JpnLr/About-modal.png" alt="About_modal screenshot" border="0">
 </div>
 <br>
 
- About modal on tablets: Confirmed responsiveness, extra text on tablets with parent instructions (more likely that parents will be sitting with a child on tablet so more info provided for parents, with some additional instructions).
- About modal on mobile: Responsiveness also confirmed. Extra text provided to parents removed on mobile to allow for the about modal to display and not shrink too much or require extra small font.

**Main game buttons, scorebox and new game button**

- When the player presses the main game buttons the guesses left decrements accordingly.
- New game button resets the guesses left, working as expected.
- Confirmed that when a player wins the game the Best Score keeps the remaining attempts locked so the player knows how many attempts they had left - can they beat the score?!

3. **Other modals**

**About modal**

- When the player or parent clicks About button a modal appears with general information about the game and Hey Bear Sensory - links to external sites [Hey Bear Sensory](https://www.heybearsensory.com/about) and also [Hey Bear Sensory YouTube channel](https://www.youtube.com/channel/UCtf9cFBJkHVAf2qMqF01xYg).

<br>
<div align="center">
<img src="https://i.ibb.co/g3JpnLr/About-modal.png" alt="About_modal screenshot" border="0">
 </div>
<br>

**Game win modal**

- When player wins, the 'Game win' modal appears and interrupts the game with a rewarding video! Confirmed that it fires and looks great on tablets and also mobile devices.
<br>
<div align="center">
<img src="https://media.giphy.com/media/2lt4BitVLRtkj8UGC4/giphy.gif" alt="win_fruit_modal" border="0">
</div>
<br>
- New game button works and resets the guesses left. Does not interfere with Best score.

**Game over modal**

- When all attempts have been exhausted, the game over modal appears.
- flashing Game Over Play Again appears.

<br>
<div align="center">
   <img src="https://media.giphy.com/media/l5L5dHkOwPbo1zgIuu/giphy.gif?cid=790b7611645d4efdb3bfeab69a167226e5b58316800b9a22&rid=giphy.gif&ct=g" alt="game_over_flashing" border="0">
</div>



