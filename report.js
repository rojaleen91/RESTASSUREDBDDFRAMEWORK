$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/nisum/IdeaProjects/FreeCrmBDDFramework/src/main/java/features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefinations.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dealStepDefinations.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinations.user_is_on_hopme_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dealStepDefinations.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "dealStepDefinations.user_enters_contacts_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinations.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("C:/Users/nisum/IdeaProjects/FreeCrmBDDFramework/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "\r\n without Examples Keyword",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 7,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 8,
      "value": "#Then user enters \"tripathy.rojaleen@gmail.com\" and \"10April@91\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then user is on home page"
    },
    {
      "line": 13,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 14,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "tripathy.rojaleen@gmail.com",
        "10April@91"
      ],
      "line": 26,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "omprasadtripathy576@gmail.com",
        "10April@91"
      ],
      "line": 27,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"tripathy.rojaleen@gmail.com\" and \"10April@91\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.user_already_on_login_page()"
});
formatter.result({
  "duration": 13738183900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 4020520300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tripathy.rojaleen@gmail.com",
      "offset": 13
    },
    {
      "val": "10April@91",
      "offset": 47
    }
  ],
  "location": "LoginStepDefinations.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 14420668600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 32365100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 7404100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.close_the_browser()"
});
formatter.result({
  "duration": 763554900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"omprasadtripathy576@gmail.com\" and \"10April@91\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinations.user_already_on_login_page()"
});
formatter.result({
  "duration": 12195889600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 4030581500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "omprasadtripathy576@gmail.com",
      "offset": 13
    },
    {
      "val": "10April@91",
      "offset": 49
    }
  ],
  "location": "LoginStepDefinations.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 13117584900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 36336000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 8131500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinations.close_the_browser()"
});
formatter.result({
  "duration": 699968100,
  "status": "passed"
});
});