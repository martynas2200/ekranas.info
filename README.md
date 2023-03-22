# Ekranas.Info

## Introduction
Ekranas.Info is a free online tool that facilitates and modernizes the dissemination of information, designed to display information using the screens of educational institutions. It consists of an admin portal, screen client, and API parts. The tool is currently in beta stage and still under development.

## Features
The platform currently offers the following features:

- Instant display of uploaded information on any screen running client
- Display of timetables, current lessons during the break times
- Data such as weather conditions, news, horoscopes could be showed from third parties
- Users can quickly add messages/advertisements and edit the lesson schedule according to the rights granted
- The data can be easily scheduled in advance or repeatedly shown

## Future Plans
There is still much to be done to improve the platform, including:

- Improving the UX/UI design
- Internalization (English)
- Adding more animations and widgets
- Creating proper documentation
- Ensuring consistent coding style
- Adding testing, ensuring good code coverage 


## Usage
The project is [online](https://ekranas.info/), but only a landing page is accessible without login details. One of the high school screen client could be seen [here](https://ekranas.info/show/borutosgimnazija).


## Background
This project started as a solution to a problem faced during a school student council meeting - how to quickly and efficiently share information with the gymnasium community. We decided to utilize the unused screen in the main lobby since the existing process of manually uploading information to slides was not ideal. To improve this, I decided to create an online platform that would allow for instant display of uploaded information on the lobby screen.

While there are similar tools available, they are typically paid and designed for business use. Additionally, none of these tools offered features specific to our needs, such as showing timetables, current lessons, name days, and horoscopes.

After obtaining consent from the school technical manager, I created the first version of the platform using PHP, as my knowledge on server-side languages was quite limited at that time. However, this version had limited functionality, poor UI/UX design, and was uploaded to a restricted school server.

After researching and learning more, I realized that a complete rewrite was necessary. I chose Angular for its single-page-application capabilities, and Node.js for its real-time communication features. I also decided to use sockets instead of continuously pulling data, which was not effective.

## Contributing
Contributions are welcome and open to everyone. If you have a suggestion or found a bug, please submit an issue or pull request to this repository. To contribute, simply fork this repository, make your changes, and create a pull request. Github makes the process simple and easy.

<!-- ## License
This project is licensed under the MIT License.
The MIT License is a permissive open-source license that allows users to modify and distribute the software without restriction, as long as the original license and copyright notice are included. -->
