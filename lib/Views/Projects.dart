import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:souvikportfolio/Adapter/AppbarAdapter/MobileAppBar.dart';
import 'package:souvikportfolio/Adapter/AppbarAdapter/OtherDeviceAppBar.dart';
import 'package:souvikportfolio/Adapter/MobileDrawerAdapter/MobileDrawer.dart';
import 'package:souvikportfolio/Adapter/ProjectsAdapter/ProjectsAdapter.dart';
import 'package:souvikportfolio/Adapter/SocialAccounts.dart';

class Projects extends StatefulWidget {
  @override
  _ProjectsState createState() => _ProjectsState();
}

class _ProjectsState extends State<Projects> {
  late double height, width;
  Future count(int n) async {
    return Future.delayed(Duration(seconds: n));
  }

  @override
  Widget build(BuildContext context) {
    height = MediaQuery.of(context).size.height > 600
        ? MediaQuery.of(context).size.height
        : 600;
    width = MediaQuery.of(context).size.width > 300
        ? MediaQuery.of(context).size.width
        : 300;
    return Scaffold(
      drawer: width < 600 ? MobileDrawer() : Container(),
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(60),
        child: width < 600 ? MobileAppBar() : OtherDeviceAppBar(),
      ),
      backgroundColor: Colors.black,
      body: Stack(
        children: [
          Positioned.fill(
            child: Container(
              width: width,
              height: height,
              padding: EdgeInsets.all(10),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 60,
                    child: SocialAccounts(),
                  ),
                  Expanded(
                    child: ListView(
                      padding: EdgeInsets.fromLTRB(15, 20, 15, 20),
                      children: [
                        Center(
                            child: Container(
                          child: AnimatedTextKit(
                            isRepeatingAnimation: false,
                            animatedTexts: [
                              TypewriterAnimatedText("My Projects",
                                  speed: Duration(milliseconds: 80),
                                  textStyle: TextStyle(
                                      fontSize: width > 600 ? 40 : 27,
                                      color: Colors.white,
                                      letterSpacing: 4),
                                  textAlign: TextAlign.start),
                            ],
                          ),
                        )),
                        SizedBox(
                          height: 15,
                        ),
                        FutureBuilder(
                            future: count(2),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState ==
                                  ConnectionState.done) {
                                return ProjectAdapter(
                                  projectName: "Read Write & Share",
                                  projectLogoPath: 'assets/images/iv.png',
                                  projectDescription:
                                      "'RWS' or 'Read Write & Share' is an Android application .\nOne can use it as a code editor (c,c++,java,python) and sharing purpose",
                                  projectDescriptionForMobile:
                                      "'RWS' or 'Read Write & Share' is an Android application .\nOne can use it as a code editor (c,c++,java,python) and sharing purpose",
                                  firstTechnology: 'ANDROID ',
                                  secondTechnology: ' , JAVA ',
                                  thirdTechnology: ' , XML ',
                                  fourthTechnology: ' , REST API (Retrofit)',
                                  projectUrl:
                                      "https://github.com/iamsouviki/Read-Write-and-Share",
                                );
                              }
                              return Container();
                            }),
                        SizedBox(
                          height: 12,
                        ),
                        FutureBuilder(
                            future: count(3),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState ==
                                  ConnectionState.done) {
                                return ProjectAdapter(
                                  projectName: "Tic Tac Toe",
                                  projectLogoPath: '',
                                  projectDescription:
                                      "'Tic Tac Toe' is a flutter application using BackTracking MinMax Algorithm .\n Here We can play with computer as well as human .",
                                  projectDescriptionForMobile:
                                      "'Tic Tac Toe' is a flutter application using BackTracking MinMax Algorithm .\n Here We can play with computer as well as human .",
                                  firstTechnology: ' Flutter ',
                                  secondTechnology:
                                      ' , Algorithm (BackTrcking Minmax) ',
                                  thirdTechnology: ' , Dart',
                                  fourthTechnology: ' , Github  , Firebase',
                                  projectUrl:
                                      "https://github.com/iamsouviki/tictactoe_game",
                                );
                              }
                              return Container();
                            }),
                        SizedBox(
                          height: 12,
                        ),
                        FutureBuilder(
                            future: count(4),
                            builder: (context, snapshot) {
                              if (snapshot.connectionState ==
                                  ConnectionState.done) {
                                return ProjectAdapter(
                                  projectName: "My Portfolio",
                                  projectLogoPath: '',
                                  projectDescription:
                                      "'My Portfolio' is a flutter web application . Its just a web resume",
                                  projectDescriptionForMobile:
                                      "'My Portfolio' is a flutter web application .\nIts just a web resume",
                                  firstTechnology: 'FLUTTER ',
                                  secondTechnology: ', DART ',
                                  thirdTechnology: ', FIREBASE ',
                                  fourthTechnology: ', GITHUB',
                                  projectUrl:
                                      "https://github.com/iamsouviki/souvikportfolio",
                                );
                              }
                              return Container();
                            }),
                        SizedBox(
                          height: 12,
                        ),
                        FutureBuilder(
                          future: count(5),
                          builder: (context, snapshot) {
                            if (snapshot.connectionState ==
                                ConnectionState.done) {
                              return ProjectAdapter(
                                projectName: "Expense Manager",
                                projectLogoPath: '',
                                projectDescription:
                                    "'Expense Manager' is a Python GUI tikinter Based application , \nwhich is developed to keep tracking on daily expenses and as well as we can save money for predefine expenses\n which will help for future investment . ",
                                projectDescriptionForMobile:
                                    "'Expense Manager' is a Python GUI tikinter Based application , \nwhich is developed to keep tracking on daily expenses and \nas well as we can save money for predefine expenses\n which will help for future investment .",
                                firstTechnology: '',
                                secondTechnology: 'PYTHON',
                                thirdTechnology: ' , SQLite',
                                fourthTechnology: '',
                                projectUrl:
                                    "https://github.com/iamsouviki/ExpenseManager",
                              );
                            }
                            return Container();
                          },
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Align(
              alignment: Alignment.center,
              child: Text(
                "Design & Build by Souvik with ❤ Flutter",
                style: TextStyle(color: Colors.white, fontSize: 12),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
