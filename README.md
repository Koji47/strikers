### Strikers Fullstack Project

## Strikers

## Description

A full stack project with a complete front end and back end, the app displays data about strikes and fighters and provides a platform to view information about them, the app displays videos for each strike, each strike has two videos, one of which shows a professional fighter using the strike and another shows a tutorial of how to throw the strike.

## Table of Contents

- [Planning](#planning)
- [Installation](#installation)
- [Usage](#usage)
- [Pages](#pages)
  - [Home](#home)
  - [Strikes](#strikes)
  - [FightersPage](#fighterspage)
  - [EditStrike](#editstrike)
  - [CreateStrike](#createstrike)
- [Components](#components)
  - [Button](#button)
  - [FavouriteStrikes](#favouritestrikes)
  - [FeaturedStrike](#featuredStrike)
  - [FighterCard](#fightercard)
  - [Form](#form)
  - [Loading](#loading)
  - [Nav](#nav)
  - [Select](#select)
  - [StrikeCard](#strikecard)
  - [StrikeList](#strikelist)
  - [VideoPlayer](#videoplayer)

## Planning

![Trello](https://github.com/Koji47/strikers/blob/main/src/assets/Readme_images/strikers_trello.PNG)
![Tree](https://github.com/Koji47/strikers/blob/main/src/assets/Readme_images/strikers_tree.PNG)
![Styling](https://github.com/Koji47/strikers/blob/main/src/assets/Readme_images/strikers_styling.PNG)
![Figma](https://github.com/Koji47/strikers/blob/main/src/assets/Readme_images/strikers_figma.PNG)

## Installation

- use npm install to make sure all dependencies are installed, all packages are saved in package.json
- "npm i"

## Usage

- users are able to view different fighters and the information stored about them,
- users are able to view videos of each strike,
- users are able to create new strikes,
- users are able to edit strikes,
- users are able to delete strikes.

## Pages

## Home

- The Home page displays a random featured strike as well as it's tutorial video,
- the Home page also displays 3 random fighters as a Fighter Card

## Strikes

- The Strikes page displays all strikes,
- users are able to filter through the strikes by the strike_type "Kick" or "Punch"
- users can access edit strikes and create strikes from this page

## Edit Strike

- The Edit strike page allows the user to edit and delete a strike
- The page uses useParams to determine the URL

## Create Strike

- The Create Strike page allows the user to create a new strike by filling out a form
- The form has default values inside

## Fighters Page

- The Fighters Page displays a list of fighters,
- users are able to filter through the fighters by the discipline in which they practice

## Components

## FighterCard

- The Fighter card displays the information about each fighter
- Each card has a name, image, location, gym, discipline and a list of favourite strikes
- The Fighter card uses the FavouriteStrikes component to display information about each of the favourite strikes

```
  console.log(fighter.strikes1);
```

- Running "console.log(fighter.strikes1)" would return undefined, to fix this issue I made a variable called strikeData that would store the strike data taken from the fighter data.

```
  Object.values(fighter).map((value) => {
    if (typeof value === "object") {
      strikeData.push(value);
    }
  });
```

- Object.values(fighter) returns a fighter with data structured as follows:

![ObjectValue](https://github.com/Koji47/strikers/blob/main/src/assets/Readme_images/strikers_ObjectValue.PNG)

- To get access to the strike data within each fighter i mapped the values into a variable called strikeData

![StrikeDataObj](https://github.com/Koji47/strikers/blob/main/src/assets/Readme_images/strikers_strikedata_obj.PNG)

- The StrikeData object values are now accessible and can be used in the fighterCard component.
