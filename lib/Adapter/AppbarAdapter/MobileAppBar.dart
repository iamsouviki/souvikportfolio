import 'package:flutter/material.dart';

import '../../Variable.dart';

class MobileAppBar extends StatefulWidget {
  @override
  _MobileAppBarState createState() => _MobileAppBarState();
}

class _MobileAppBarState extends State<MobileAppBar> {
  @override
  Widget build(BuildContext context) {
    return AppBar(
      automaticallyImplyLeading: true,
      backgroundColor: Colors.transparent,
      shadowColor: Colors.transparent,
      actions: [
        Container(
          padding: EdgeInsets.only(right: 13),
          child: Row(
            children: [
              Container(
                padding: EdgeInsets.only(right: 8),
                child: Transform.rotate(
                  angle: 0,
                  child: FittedBox(
                    child: Container(
                      width: 20,
                      height: 20,
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
              Text(
                "Souvik",
                style: TextStyle(color: Colors.white),
              ),
            ],
          ),
        )
      ],
    );
  }
}
