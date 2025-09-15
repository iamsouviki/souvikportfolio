import 'package:flutter/material.dart';
import 'package:souvikportfolio/Adapter/AppbarAdapter/MobileAppBar.dart';
import 'package:souvikportfolio/Adapter/AppbarAdapter/OtherDeviceAppBar.dart';
import 'package:souvikportfolio/Adapter/HomePageAdapter/Introduction.dart';
import 'package:souvikportfolio/Adapter/MobileDrawerAdapter/MobileDrawer.dart';
import 'package:souvikportfolio/Adapter/SocialAccounts.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  late double hight, width;

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    precacheImage(AssetImage('assets/images/souvikimagepassport.jpg'), context);
  }

  @override
  Widget build(BuildContext context) {
    hight = MediaQuery.of(context).size.height > 600
        ? MediaQuery.of(context).size.height
        : 600;
    width = MediaQuery.of(context).size.width > 300
        ? MediaQuery.of(context).size.width
        : 300;
    double screenHeight = MediaQuery.of(context).size.height;
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
              height: hight,
              padding: EdgeInsets.all(10),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    width: 60,
                    child: SocialAccounts(),
                  ),
                  Expanded(
                    child: SingleChildScrollView(
                      padding: EdgeInsets.all(15),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Introduction(),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
