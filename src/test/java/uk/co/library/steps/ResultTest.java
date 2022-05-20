package uk.co.library.steps;

import cucumber.api.java.en.Given;
import uk.co.library.pages.ResultPage;

public class ResultTest {

    @Given("^I get text from result$")
    public void iGetTextFromResult() {
        new ResultPage().gettextFromResultTextField();
    }
}
