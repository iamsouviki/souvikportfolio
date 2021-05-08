import 'package:flutter/material.dart';
import 'package:souvikportfolio/Adapter/AboutMeAdapter/About.dart';
import 'package:souvikportfolio/Adapter/AboutMeAdapter/Education.dart';
import 'package:souvikportfolio/Adapter/AboutMeAdapter/Skill.dart';
import 'package:souvikportfolio/Adapter/AppbarAdapter/MobileAppBar.dart';
import 'package:souvikportfolio/Adapter/AppbarAdapter/OtherDeviceAppBar.dart';
import 'package:souvikportfolio/Adapter/MobileDrawerAdapter/MobileDrawer.dart';
import 'package:souvikportfolio/Adapter/SocialAccounts.dart';


class AboutMe extends StatefulWidget {
  @override
  _AboutMeState createState() => _AboutMeState();
}

class _AboutMeState extends State<AboutMe> {
  late double hight, width;
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
                  width: width,
                  height: hight,
                  padding: EdgeInsets.all(15),
                  child: ListView(
                    children: [
                      Row(
                        children: [
                          Flexible(flex: 1, child: SocialAccounts()),
                          Flexible(
                            flex: 10,
                            child: Container(
                                padding: EdgeInsets.all(15),
                                child: Column(
                                  children: [About(), Education(), Skill()],
                                )),
                          )
                        ],
                      )
                    ],
                  ),
                ))));
  }
}
