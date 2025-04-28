<h1 >Automation UI project for <a href="https://store.steampowered.com/ ">Steam</a></h1>

![Steam_logo.svg.png](src/logo.jpg)

## :bookmark_tabs: Сontent

- <a href="#tools">Technology Stack</a>

- <a href="#cases">Automated Checks</a>

- <a href="#console">Run tests from the command line</a>

- <a href="#jenkins">Running tests in Jenkins</a>

- <a href="#allure">Test reports in Allure Report</a>

- <a href="#allure-testops">Integration with Allure TestOps</a>

- <a href="#telegram">Notifications in Telegram using a bot</a>

- <a href="#video">Example of a test run in Playwright</a>

<a id="tools"></a>

## Technology Stack

| JavaScript                                                                                                    | Visual Studio Code                                                                                                                  | GitHub                                                                                                    | Playwright                                                                                                         | Allure                                                                                                          | Test-Ops                                                                                                      | Telegram                                                                                                        |                                                                                                         Jenkins |
| :------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------: |
| <a href="https://nodejs.org/en"><img src="src/images/JavaScript.svg" width="50" height="50"  alt="Java"/></a> | <a id ="tech" href="https://code.visualstudio.com/"><img src="src/images/VSCode Image.png" width="50" height="50"  alt="IDEA"/></a> | <a href="https://github.com/"><img src="src/images/gitHub.svg" width="50" height="50"  alt="Github"/></a> | <a href="https://playwright.dev/"><img src="src/images/playwright.svg" width="50" height="50"  alt="JUnit 5"/></a> | <a href="https://allurereport.org/"><img src="src/images/allure.png" width="50" height="50"  alt="Gradle"/></a> | <a href="https://qatools.ru/"><img src="src/images/test-ops.png" width="50" height="50"  alt="Selenide"/></a> | <a href="https://telegram.org/"><img src="src/images/telegram.svg" width="50" height="50"  alt="Selenoid"/></a> | <a href="https://www.jenkins.io/"><img src="src/images/jenkins.svg" width="50" height="50"  alt="Jenkins"/></a> |

<a id="cases"></a>

## :ballot_box_with_check: Automated Checks

- :small_blue_diamond: Login to account
- :small_blue_diamond: Update profile information on the profile page
- :small_blue_diamond: Change a language
- :small_blue_diamond: Select a special game category
- :small_blue_diamond: Search a game via search bar
- :small_blue_diamond: Add a game to the shopping cart
- :small_blue_diamond: Remove a game from the shopping cart
- :small_blue_diamond: Search for a friend using a code

<a id="console"></a>

## :computer: Run tests from the command line

### Running tests locally

```
npm t
```

<a id="jenkins"></a>

## <img src="media/logo/Jenkins.svg" width="25" height="25"/></a> Running tests in Jenkins

<a target="_blank" href="https://jenkins.autotests.cloud/job/18-johnnyhlammaster-steamUiProject
/">Сборка в Jenkins</a>

<p align="center">

<a href="https://jenkins.autotests.cloud/job/AD_demo_ui_steam/"><img src="media/screenshots/jenkins.jpg" alt="Jenkins"/></a>

> Сборка с параметрами позволяет перед запуском изменить параметры для сборки (путем выбора из списка или прямым указанием значения).
> Клик по иконкам Allure TestOps и Allure Report позволяет перейти на просмотр страниц с тестовой документацией и отчетов.

<a href="https://jenkins.autotests.cloud/job/AD_demo_ui_steam/"><img src="media/screenshots/param.png" alt="Jenkins"/></a>

</p>

<a id="allure"></a>

## <img src="media/logo/Allure.svg" width="25" height="25"/></a> Test reports in [Allure Report](https://jenkins.autotests.cloud/job/18-johnnyhlammaster-steamUiProject/20/allure/)

### Main window

<p align="center">
<img title="Allure Overview Dashboard" src="media/screenshots/alluremain.jpg">
</p>

### Tests

> Each check is accompanied by a screenshot of the last action in the test and logs..

<p align="center">
<img title="Allure Tests" src="media/screenshots/allure2.jpg">
</p>

<a id="allure-testops"></a>

## <img src="media/logo/Allure_TO.svg" width="25" height="25"/></a> Integration with [Allure TestOps](https://allure.autotests.cloud/project/2296/dashboards)

> Integration Allure TestOps with Jenkins allows launching several special tests & track track their execution in online format.

<p align="center">
<img title="Allure TestOps" src="media/screenshots/photo_2023-05-24_15-30-17.jpg">
</p>

> Test runs can be visualized as charts.

<p align="center">
<img title="Allure TestOps" src="media/screenshots/dashboard.jpg">
</p>

> Test cases stay up-to-date since scenarios are extracted from the code.

<p align="center">
<img title="Allure TestOps" src="media/screenshots/testk.jpg">
</p>

<a id="telegram"></a>

## <img src="media/logo/Telegram.svg" width="25" height="25"/></a> Notifications in Telegram using a bot

<p >
<img title="telegram bot" src="media/screenshots/tele.jpg">
</p>

<a id="video"></a>

## <img src="media/logo/Selenoid.svg" width="25" height="25"/></a> Playwright Test Run Example

> Test run recording: "Login to account".

<p align="center">
  <img title="Playwright Record" src="media/video/d879d2ab0c4ea4a2f7871c48c2b2df0b.gif">
</p>
