import React from "react";
import BurgerPic from "../../assets/Images/burger-project.png";
import ProjectOnePic from "../../assets/Images/Hungry_or_Bored.png";
import ProjectTwoPic from "../../assets/Images/movie-rater-project.png";
import SchedulePic from "../../assets/Images/Scheduler.png";
import WeatherPic from "../../assets/Images/Weather-Forecast.png";
import DirectoryPic from "../../assets/Images/directory.png";


function burgerProject() {
    window.open("https://burger-list-plus.herokuapp.com/")
}
function hungryProject() {
    window.open("https://nddarnell.github.io/Hungry_or_Bored-Project-1/")
}
function weatherProject() {
    window.open("https://nddarnell.github.io/Week6-Homework-5_Day_Weather_Forecast/")
}
function schedulerProject() {
    window.open("https://nddarnell.github.io/Week5-Homework-Daily_Planner/")
}
function project2() {
    window.open("https://rotten-potatoes-vm3.herokuapp.com/login")
}
function directory() {
    window.open("https://nddarnell.github.io/Week19-Homework-Employee_Directory/")
}


function AllProjects() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4 mt-5">
                        <div className="card border-0 shadow">
                            <img type="button" onClick={project2} src={ProjectTwoPic} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">
                                    Rotten Potatoes
                                </h5>
                                <div className="card-text text-black-50">
                                    This app was created using Express-Handlebars, MySQL database, Node.js, Chart.js, Passport.js
                                    JQuery, and MVC. It allows you to rate movies and see how a movie is rated according to a plethora of users. Give it a try!
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://rotten-potatoes-vm3.herokuapp.com/login" target="_blank">Deployed Site!</a>  
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://github.com/Nmosch/P2_Valar_Morghulis_Movie_Ranker" target="_blank">Github Repo!</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="col-md-6 mb-4 mt-5">
                        <div className="card border-0 shadow">
                            <img type="button" onClick={directory} src={DirectoryPic} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">
                                    Employee Directory
                                </h5>
                                <div className="card-text text-black-50">
                                    This application was created using React.js and allows the user to search for an employee using a filter function or sort by employee name. Give it a try!
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://rotten-potatoes-vm3.herokuapp.com/login" target="_blank">Deployed Site!</a>  
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://github.com/Nmosch/P2_Valar_Morghulis_Movie_Ranker" target="_blank">Github Repo!</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4 mt-5">
                        <div className="card border-0 shadow">
                            <img type="button" onClick={burgerProject} src={BurgerPic} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">
                                    Burger Picker Mini Project
                                </h5>
                                <div className="card-text text-black-50">
                                    This app was created using Express-Handlebars, MySQL database, Node.js,
                                    JQuery, and MVC. Give it a try!
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://burger-list-plus.herokuapp.com/" target="_blank">Deployed Site!</a>  
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://github.com/nddarnell/Week13-Homework-Node_Express_Handlebars_Mini_Project" target="_blank">Github Repo!</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="col-md-6 mb-4 mt-5">
                        <div className="card border-0 shadow">
                            <img type="button" onClick={hungryProject} src={ProjectOnePic} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">
                                    Hungry or Bored
                                </h5>
                                <div className="card-text text-black-50">
                                    This website allows you to search for restaurants nearby, find recipes
                                    online, or give you an activity to do if youre bored. Give it a try!
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://nddarnell.github.io/Hungry_or_Bored-Project-1/" target="_blank">Deployed Site!</a>  
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://github.com/nddarnell/Hungry_or_Bored-Project-1" target="_blank">Github Repo!</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4 mt-5">
                        <div className="card border-0 shadow">
                            <img type="button" onClick={weatherProject} src={WeatherPic} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">
                                    5 Day Weather Forecast
                                </h5>
                                <div className="card-text text-black-50">
                                    This does whats in the name! Utilizing openweather.api and moment.js
                                    you can search for Cities inside the U.S. to see the current and upcoming weather. Give it a try!
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://nddarnell.github.io/Week6-Homework-5_Day_Weather_Forecast/" target="_blank">Deployed Site!</a>  
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://github.com/nddarnell/Week6-Homework-5_Day_Weather_Forecast" target="_blank">Github Repo!</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <div className="col-md-6 mb-4 mt-5">
                        <div className="card border-0 shadow">
                            <img type="button" onClick={schedulerProject} src={SchedulePic} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <h5 className="card-title mb-0">
                                    Work Day Scheduler
                                </h5>
                                <div className="card-text text-black-50">
                                    This helps you plan out your day utilizing local storage and moment.js
                                    for an interactive way to see whats upcoming and whats past during your day. Give it a try!
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://nddarnell.github.io/Week5-Homework-Daily_Planner/" target="_blank">Deployed Site!</a>  
                                </div>
                                <div className="card-text text-black-50">
                                    <a href="https://github.com/nddarnell/Week5-Homework-Daily_Planner" target="_blank">Github Repo!</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>           
        </>
    );
}

export default AllProjects;