package uk.co.library.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;

public class HomepageTest {

    @Given("^I click on job title$")
    public void iClickOnJobTitle() {
        new HomePage().enterJobtitle("Software Tester");
    }

    @When("^I click on enter location$")
    public void iClickOnEnterLocation() {
        new HomePage().enterLocation("Watford, Hertfordshire");
    }

    @And("^I click on select distance$")
    public void iClickOnSelectDistance() {
        new HomePage().selectDistance("up to 5 miles");
    }

    @And("^I click on more search options$")
    public void iClickOnMoreSearchOptions() {
        new HomePage().clickOnMOreSeacrhOptionLink();
    }

    @And("^I click on enter min salary$")
    public void iClickOnEnterMinSalary() {
        new HomePage().enterMinSalary("10000");
    }

    @And("^I click on enter max salary$")
    public void iClickOnEnterMaxSalary() {
        new HomePage().enterMaxSalary("30000");
    }

    @And("^I click on select salary type$")
    public void iClickOnSelectSalaryType() {
        new HomePage().selectSalaryType("Per month");
    }

    @And("^I click on select job type$")
    public void iClickOnSelectJobType() throws InterruptedException {
        Thread.sleep(4000);
        new HomePage().selectJobType("Any");
    }

    @And("^I click on findjob button$")
    public void iClickOnFindJobButton() throws InterruptedException {
        Thread.sleep(3000);
        new HomePage().setFindJobButton();
    }

    @And("^I click on manage cookies$")
    public void iClickOnManageCookies() throws InterruptedException {
        Thread.sleep(5000);
        new HomePage().clickOnManageCookie();
    }

    @Then("^I handale the iframe$")
    public void iHandalingTheIframe() throws InterruptedException {
        Thread.sleep(5000);
        new HomePage().hanldingIframe();
    }
}
