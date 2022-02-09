import 'package:flutter/material.dart';
import 'package:souvikportfolio/Views/AboutMe.dart';
import 'package:souvikportfolio/Views/Experience.dart';
import 'package:souvikportfolio/Views/Home.dart';
import 'package:souvikportfolio/Views/Projects.dart';

import '../../Variable.dart';

class OtherDeviceAppBar extends StatefulWidget {
  @override
  _OtherDeviceAppBarState createState() => _OtherDeviceAppBarState();
}

class _OtherDeviceAppBarState extends State<OtherDeviceAppBar> {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: Colors.transparent,
      shadowColor: Colors.transparent,
      leading: Container(
        padding: EdgeInsets.fromLTRB(7, 15, 0, 15),
        child: Transform.rotate(
          angle: 0,
          child: FittedBox(
            child: Container(
              width: 10,
              height: 10,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.black26,
                border: Border.all(color: Colors.white38, width: 1),
                image: DecorationImage(
                  fit: BoxFit.cover,
                  image: AssetImage(IMAGE_PATH),
                ),
              ),
            ),
          ),
        ),
      ),
      actions: [
        Container(
          padding: EdgeInsets.only(right: 20),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              FittedBox(
                child: Container(
                    padding: EdgeInsets.symmetric(horizontal: 15),
                    child: TextButton(
                      child: Text(
                        "   Home   ",
                        style: TextStyle(color: Colors.white, fontSize: 12),
                      ),
                      onPressed: () {
                        Navigator.pop(context);
                        Navigator.push(context,
                            MaterialPageRoute(builder: (context) => Home()));
                      },
                    )),
              ),
              FittedBox(
                child: Container(
                    padding: EdgeInsets.symmetric(horizontal: 15),
                    child: TextButton(
                      child: Text(
                        " About Me ",
                        style: TextStyle(color: Colors.white, fontSize: 12),
                      ),
                      onPressed: () {
                        Navigator.pop(context);
                        Navigator.push(context,
                            MaterialPageRoute(builder: (context) => AboutMe()));
                      },
                    )),
              ),
              FittedBox(
                child: Container(
                    padding: EdgeInsets.symmetric(horizontal: 15),
                    child: TextButton(
                      child: Text(
                        "Experience",
                        style: TextStyle(color: Colors.white, fontSize: 12),
                      ),
                      onPressed: () {
                        Navigator.pop(context);
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => Experience()));
                      },
                    )),
              ),
              FittedBox(
                child: Container(
                    padding: EdgeInsets.symmetric(horizontal: 15),
                    child: TextButton(
                      child: Text(
                        "  Project ",
                        style: TextStyle(color: Colors.white, fontSize: 12),
                      ),
                      onPressed: () {
                        Navigator.pop(context);
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => Projects()));
                      },
                    )),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
