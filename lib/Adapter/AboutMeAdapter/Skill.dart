import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';

import '../../Variable.dart';

class Skill extends StatefulWidget {
  @override
  _SkillState createState() => _SkillState();
}

class _SkillState extends State<Skill> {
  Future count(int n) async {
    return Future.delayed(Duration(seconds: n));
  }

  List<Widget> getSkills() {
    List<Widget> skills = [];
    for (var i = 0; i < Skills.length; i++) {
      skills.add(
        Row(
          children: [
            Container(
              padding: EdgeInsets.only(right: 8),
              child: Icon(
                Icons.skip_next,
                color: Colors.white,
                size: 10,
              ),
            ),
            FutureBuilder(
              future: count(1),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.done) {
                  return Container(
                    padding: EdgeInsets.fromLTRB(15, 15, 15, 10),
                    child: AnimatedTextKit(
                      isRepeatingAnimation: false,
                      animatedTexts: [
                        TypewriterAnimatedText(Skills[i],
                            speed: Duration(milliseconds: 10),
                            textStyle: TextStyle(
                              color: Colors.blueGrey[900],
                              fontSize: 13,
                              fontWeight: FontWeight.w700,
                            ),
                            textAlign: TextAlign.start),
                      ],
                    ),
                  );
                }
                return Container();
              },
            ),
            SizedBox(height: 40,),
          ],
        ),
      );
    }
    return skills;
  }

  late double hight, width;
  @override
  Widget build(BuildContext context) {
    hight = MediaQuery.of(context).size.height > 600
        ? MediaQuery.of(context).size.height
        : 600;
    width = MediaQuery.of(context).size.width > 300
        ? MediaQuery.of(context).size.width
        : 300;
    var borderColor = Colors.white;
    var backgroundColor = Colors.transparent;
    return Container(
      child: Column(
        children: [
          Container(
            padding: EdgeInsets.all(15),
            child: AnimatedTextKit(
              isRepeatingAnimation: false,
              animatedTexts: [
                TypewriterAnimatedText(
                  'Skills',
                  speed: Duration(milliseconds: 55),
                  textStyle: TextStyle(
                    color: Colors.white,
                    fontSize: 25,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 1.4,
                  ),
                  textAlign: TextAlign.start,
                ),
              ],
            ),
          ),
          width > 610
              ? Row(
                  children: [
                    Flexible(
                      flex: 1,
                      child: Container(
                        child: Transform.rotate(
                          angle: 0,
                          child: FittedBox(
                            child: Container(
                              width: 100,
                              height: 100,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: backgroundColor,
                                border:
                                    Border.all(color: borderColor, width: 2),
                                image: DecorationImage(
                                  image: AssetImage('assets/images/man.png'),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    Flexible(
                      flex: 2,
                      child: Container(
                          padding: EdgeInsets.fromLTRB(30, 10, 10, 10),
                          child: Center(
                            child: Column(
                              children: getSkills(),
                            ),
                          )),
                    )
                  ],
                )
              : Column(
                  children: [
                    Container(
                      color: Colors.white,
                      child: Transform.rotate(
                        angle: 0,
                        child: FittedBox(
                          child: Container(
                            width: 30,
                            height: 30,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: backgroundColor,
                              border: Border.all(color: borderColor, width: 2),
                              image: DecorationImage(
                                image: AssetImage('assets/images/man.png'),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    Center(
                      child: Container(
                          padding: EdgeInsets.all(10),
                          child: Center(
                            child: Column(
                              children: getSkills(),
                            ),
                          )),
                    )
                  ],
                ),
        ],
      ),
    );
  }
}
