# d3a.io-automation-demo
d3a.io automation using cypress and javascript with Cucumber.

Test location : cypress/integration

# Feature file

Feature: d3a.io
  Login to D3A.io
  Create a Project
  Create a Simulation

  @login
  Scenario: Validate that a precreated user is able to login to d3a.io
    Given I open D3A.io login page
    And I check page contains "Create new account" and "Request password reset" links
    And I enter "krishna.x.kant@icloud.com" in the email field
    And I enter "krishna.x.kant#123" in the password field
    When I click on login button
    Then I should navigate to homepage
    Then I check setting menu to check "krishna.x.kant@icloud.com" user is logged in
    Then I check all the navigation items on left menu are present
    Then I check all the video items on the page are present


  @create-project
  Scenario: Validate that a logged in user is able to create a project and its listed correctly after creation
    Given I check setting menu to confirm "krishna.x.kant@icloud.com" user is logged in
    When I click on Projects menu on left to create new project
    Then I should navigate to Projects page
    Then I click on New Project button on top right
    Then I provide "Test Project #" as name and "This is sample project for demo" as description for the new project
    When I click on Add button to create new project
    Then I check that new project is created and is listed correctly


  @create-simulation
  Scenario: Validate that a logged in user can create a simulation and its listed correctly, simulation can be empty
    Given I check setting menu to confirm "krishna.x.kant@icloud.com" user is logged in
    Then I click on newly created project
    Then I click on New Simultaion button to add simulation
    Then I check that new simulation form is opened and I validate all form elements
    Then I provide the simulation description as "This is sample simulation for demo" and leave rest of the values default on form
    Then I click on Next button to create new simulation
    Then I check that new simulation is created and is listed correctly


# Run tests

```
npm install
``` 

## To run tests in background
```
npm test
``` 

## To run tests manually via cypress runner
```
npx cypress open
```
![Screenshot](cypress_runner.png) 

## To run tests in background and record on cypress dashboard to see video
```
npx cypress run --record --key 4ce5524b-be23-401b-bdeb-860e7ec61441
``` 
https://dashboard.cypress.io/projects/pv5nq9

![Screenshot](cypress_dashboard.png) 

## To generate cucumber reportn after test is complete
```
node cucumber-html-reporter.js
``` 

![Screenshot](cucumber_report.png) 



