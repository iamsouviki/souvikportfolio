import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';

import '../../Variable.dart';
import 'IntroDuctionAnimationTextAdapter.dart';

class Introduction extends StatefulWidget {
  @override
  _IntroductionState createState() => _IntroductionState();
}

class _IntroductionState extends State<Introduction> {
  late double hight, width;

  @override
  Widget build(BuildContext context) {
    hight = MediaQuery.of(context).size.height;
    width = MediaQuery.of(context).size.width;
    var borderColor = Colors.white;
    var backgroundColor = Colors.transparent;
    return Container(
        child: width > 600
            ? Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Flexible(
                    flex: 1,
                    child: IntroDuctionAnimationTextAdapter(),
                  ),
                  Flexible(
                    flex: 1,
                    child: Container(
                      child: Transform.rotate(
                        angle: 0,
                        child: Container(
                          width: 300,
                          height: 300,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: backgroundColor,
                            border: Border.all(color: borderColor, width: 2),
                            image: DecorationImage(
                              fit: BoxFit.cover,
                              image: AssetImage(IMAGE_PATH),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              )
            : Column(
                children: [
                  Container(
                    child: Transform.rotate(
                      angle: 0,
                      child: FittedBox(
                        child: Container(
                          width: 100,
                          height: 100,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: backgroundColor,
                            border: Border.all(color: borderColor, width: 2),
                            image: DecorationImage(
                              fit: BoxFit.cover,
                              image: AssetImage(IMAGE_PATH),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  IntroDuctionAnimationTextAdapter()
                ],
              ));
  }
}
