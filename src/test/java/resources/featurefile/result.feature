Feature: result page test

  Scenario: user should navigate to result page successfully
    Given   I click on job title
    When    I click on enter location
    And     I click on select distance
    And     I click on more search options
    And     I click on enter min salary
    And     I click on enter max salary
    And     I click on select salary type
    And     I click on select job type
    And     I click on findjob button
    And     I click on manage cookies
    And     I handale the iframe
    Then    I get text from result