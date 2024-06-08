# Full Stack Pathway Group 2 project: 'Fun 4 All' :roller_coaster:
A Web App for users to use to access information about Theme Park accessibility and Theme Park Ride Wait times. 

## About the project

This App allows users to plan ahead for a potential visit to a Theme Park and learn about support services and accessibility facilities available at selected Theme Parks.  Users can access the latest information on current wait times on all rides at the selected Theme Parks.  Knowing the wait times for rides can support user to plan their day accordingly whilst at the park. The App has been designed to be used by either individuals with disabilities and additional needs and/or accompanying carers and family members who are planning a visit. 

### Motivation 
This project has given us the oportunity to develop and demonstrate skills and knowledge of programming languages: HTML, CSS, Javascript and JSX, experience of building components in React, Hook states, testing theory and application, gain experience with javascript runtime environment Node.js, gain experience of using agile methodologies within a team, effective team comunication and gain confidence in using Version Control Systems, such as Git(using terminal commands) and GitHub.

### Project Document
For a deep dive into the background and strategy behind the App, take a look at the Project Document within the Project Folder.

### Software used 
- We used Node.js as a javascript runtime environment.
- We built the App in React using JSX, HTML, CSS and Javascript languages.
- We leveraged both Bootstrap and Material-UI (MUI) to help build our component-based application. These, as well as other dependencies used, are listed in the _node_modules_ folder.
- We used Figma to create a wireframe to design our User Interface and plan our User Experience https://www.figma.com/
- We used an external API https://queue-times.com/ to retrieve waiting times at selected theme parks.
- To bypass the API's restrictive CORS policy, we used Express to develop a server-size proxy.
- We used Git and Github for version control to collaborate as a team of 6 developers.

### Future updates :arrow_forward:
For future releases, we will add the following new features:
- User Login and password authentication.
- Users can be signposted directly to Access Support Teams at Theme Parks.
- Users can acccess directions from their location to Theme Park using Google Maps
- Users can add reviews of Theme Park Accessibility Facilities for other users.
- Users can add reviews of Theme Park Rides with disability in mind for other users.
- Options for users to undo / edit favourites.
- Option for users to filter theme park rides by open/close status as well as waiting time from high to low. 

## How to install and run the project :rocket:
1.	Clone the CFG_Final_Project_Group_2 repository to your local machine using the url [https://github.com/z-uza/CFG_Final_Project_Group_2 ](https://github.com/z-uza/CFG_Final_Project_Group_2)
2.	Open the project folder 'group app' in Visual Studio Code
3.	From your command terminal, locate the pathway to the project folder, once inside 'group-app' install React requirements by running node.js using these command prompts: **npm install** followed by **npm start**
> [!IMPORTANT]
> Ensure the Express server is booted up by running **node server.js** in the project's terminal. If successful, you should see _Example app listening at http://localhost:5000_ in the console. Without this, the application will not run as intended.
5.	In your web browser locate the tab with the React logo and check that page is running from **localhost:3000** which should displayed in the web app address bar, the contents of the Home page of the Web App 'Fun 4 All' should be displayed.
6. The Web App can be navigated by using the nav bar and buttons on the home page.
7. The code files for the App can be accessed via the _backend_ and _group-add_ folders in the repo.

## How to use the project
The App has the following functionality:
- Users can navigate their way through the Web App via a Nav bar
- Users can view all Theme Park Accessibility Information via a drop down menu.
- Users can view all rides available at any selected Theme Park via a drop down menu.
- Users can find out the current wait times for any ride they select in any selected Theme Park.
- Users can save their favourite rides to a favourites page for their convenience.
- Users can make contact with the App creators via links to GitHub on About Page

## Summary of design principles and testing

The App was designed for ease of use and to provide the user with simple intuitive user friendly interface. Users are able to navigate through the web app via the nav bar buttons which displays three pages: Home, About, Favourites. From the Home page there is a button to take the user to a Theme Park Page and also from the Home page there is a button to take the user to the Theme Park Accessibility Page, so there are five pages in total.
Testing has allowed us to improve the user experience. For example, we have included test files within the 'group-app' folder to test various components, such as testing accessibility button name is correctly displayed and that the navigation bar's routing works as expected. 

## Credits
### Full Stack Pathway Group 2 members :woman_technologist:
This team project is a collaboration between six developers:

**[Majella O'Mahony](https://github.com/MadgeMom)**
* Currently on the Full Stack Pathway of a Nano Degree with Code First Girls.  I have a teaching background in Education and I Mentor and coach autistic adults and adults with ADHD. What inspired me to learn computer languages...? When I was a teacher I discovered that creating coding projects were the highlight of my week and also my students.  I want to turn a fun hobby into a full-time job!

Previous CFG Projects:
- Designed and created an interactive web application using HTML, CSS and Javascript
- Created an interactive web application with a suite of interactive productivity tools using HTML, CSS and Javascript
- Create a console app in Python to interact with an API to obtain Data and transform Data for impact
- Designed and built a relational database, with complex queries, in-built functions, joins, stored procedures and to handle specific complex Data requirements
- created an interactive App using HTTP requests and internal API to support fictional business

**[Beth Hopla](https://github.com/bhpla9)**
* I am a career-switcher with a background in digital marketing who is looking to channel my analytical and creative problem-solving abilities into the exciting world of tech. Currently enrolled in the CFG Full Stack degree, I am acquiring foundational skills across wide range of technologies which I hope will propell me to a successful career within such a dynamic field. 

**[Warda Egal](https://github.com/wardanot)**
* Having been a QA Engineer for three years now, I love nothing more than being on the other side of the code and understanding how all the systems and applications I test come together. I come from a natural sciences educational background but have tried to nurture my passion for coding through self-learning and taking courses to help me on my journey to becoming a software developer such as the CFG Introduction to Web Development course where I was given a special award for my outstanding final project created using HTML, CSS and Bootstrap and now partaking in the full stack stream of the CFG Degree. 

### References
We are grateful to the following people / organisations for their tuition, resources and guidance. Without them, this project would not be possible.

- [Code First Girls](https://codefirstgirls.com/) and the whole CFG community
- Code Academy[Learn React](https://www.codecademy.com/search?query=react%20101)


## License
[GNU General Public License v3.0](License)


