package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());
    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitleField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement locationField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distancedropDownMenu;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionLink;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement minSalaryField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement maxSalaryField;

    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobButton;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Accept All')]")
    WebElement cookiesAcceptField;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Manage Settings')]")
    WebElement manageCookie;


    public void enterJobtitle(String jobTitle) {
        sendTextToElement(jobTitleField, jobTitle);
    }

    public void enterLocation(String location) {
        sendTextToElement(locationField, location);
    }

    public void selectDistance(String distance) {
        selectByVisibleTextFromDropDown(distancedropDownMenu, distance);
    }

    public void clickOnMOreSeacrhOptionLink() {
        clickOnElement(moreSearchOptionLink);
    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(minSalaryField, minSalary);
    }

    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(maxSalaryField, maxSalary);
    }

    public void selectSalaryType(String sType) {
        selectByVisibleTextFromDropDown(salaryTypeDropDown, sType);
    }

    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);
    }

    public void setFindJobButton() {
        clickOnElement(findJobButton);
    }


    public void clickOnManageCookie() {
        clickOnElement(manageCookie);
    }

    public void hanldingIframe() {
        driver.switchTo().frame("gdpr-consent-notice");
        clickOnElement(cookiesAcceptField);
        driver.switchTo().defaultContent();
    }
}
