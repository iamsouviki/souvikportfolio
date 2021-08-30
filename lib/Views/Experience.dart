import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:souvikportfolio/Adapter/AppbarAdapter/MobileAppBar.dart';
import 'package:souvikportfolio/Adapter/AppbarAdapter/OtherDeviceAppBar.dart';
import 'package:souvikportfolio/Adapter/ExperienceAdapter/ExperienceAdapter.dart';
import 'package:souvikportfolio/Adapter/MobileDrawerAdapter/MobileDrawer.dart';

class Experience extends StatefulWidget {
  @override
  _ExperienceState createState() => _ExperienceState();
}

class _ExperienceState extends State<Experience> {
  late double hight, width;
  Future count(int n) async {
    return Future.delayed(Duration(seconds: n));
  }

  @override
  Widget build(BuildContext context) {
    hight = MediaQuery.of(context).size.height > 600
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
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child: SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: Container(
            padding: EdgeInsets.fromLTRB(10, 20, 10, 20),
            height: hight,
            width: width,
            child: ListView(
              children: [
                Center(
                    child: Container(
                  child: AnimatedTextKit(
                    isRepeatingAnimation: false,
                    animatedTexts: [
                      TypewriterAnimatedText("Where I Worked",
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
                // FutureBuilder(
                //     future: count(2),
                //     builder: (context, snapshot) {
                //       if (snapshot.connectionState == ConnectionState.done) {
                //         return ExperienceAdapter(
                //           CompanyLogoPath: 'assets/images/tcslogo.jpeg',
                //           CompanyName: "TATA Consultancy Services(TCS)",
                //           WorkDescription: "Assistant System Engineer-Trainee",
                //           WorkDescriptionForMobile:
                //               "Assistant System Engineer-Trainee",
                //           WorkDuration: "Oct,2021 - Present",
                //         );
                //       }
                //       return Container();
                //     }),
                FutureBuilder(
                    future: count(2),
                    builder: (context, snapshot) {
                      if (snapshot.connectionState == ConnectionState.done) {
                        return ExperienceAdapter(
                          CompanyLogoPath: 'assets/images/qworkzLOGO.jpeg',
                          CompanyName: "Qworkz Technology Solutions",
                          WorkDescription: "Mobile Application Developer",
                          WorkDescriptionForMobile:
                              "Mobile Application Developer",
                          WorkDuration: "May,2021 - Present",
                        );
                      }
                      return Container();
                    }),
                FutureBuilder(
                    future: count(4),
                    builder: (context, snapshot) {
                      if (snapshot.connectionState == ConnectionState.done) {
                        return ExperienceAdapter(
                          CompanyLogoPath:
                              'assets/images/digitalgriendlogo.png',
                          CompanyName: "Digital Friend",
                          WorkDescription:
                              "Full Stack Flutter Developer(as an intern)",
                          WorkDescriptionForMobile:
                              "Full Stack Flutter Developer(as an intern).",
                          WorkDuration: "Apr,2021 - Oct,2021",
                        );
                      }
                      return Container();
                    }),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
