import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';

import '../../Variable.dart';

class Skill extends StatefulWidget {
  final VoidCallback? onComplete;
  final bool showAnimations;
  const Skill({Key? key, this.onComplete, this.showAnimations = true})
      : super(key: key);

  @override
  _SkillState createState() => _SkillState();
}

class _SkillState extends State<Skill> with TickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _animation;
  List<double> _progressValues = [];

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: Duration(seconds: 1),
      vsync: this,
    );
    _animation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _controller, curve: Curves.easeInOut),
    );
    _controller.forward();

    // Set static progress values immediately
    for (int i = 0; i < Skills.length; i++) {
      _progressValues.add(SkillPercentages[Skills[i]]!);
    }

    // Call onComplete after title and skill names (1s for typing)
    Future.delayed(const Duration(milliseconds: 1000), () {
      if (mounted && widget.onComplete != null) {
        widget.onComplete?.call();
      }
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    height = height > 600 ? height : 600;
    width = width > 300 ? width : 300;

    return Card(
      color: Colors.transparent,
      elevation: 8,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          color: Colors.white.withOpacity(0.1),
        ),
        child: Container(
          padding: EdgeInsets.all(16),
          child: FadeTransition(
            opacity: _animation,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                // Title
                Container(
                  padding: EdgeInsets.symmetric(vertical: 8, horizontal: 4),
                  child: widget.showAnimations
                      ? AnimatedTextKit(
                          isRepeatingAnimation: false,
                          animatedTexts: [
                            TypewriterAnimatedText(
                              'Skills',
                              speed: Duration(milliseconds: 50),
                              textStyle: TextStyle(
                                color: Colors.white,
                                fontSize: 28,
                                fontWeight: FontWeight.bold,
                                letterSpacing: 1.2,
                                shadows: [
                                  Shadow(
                                    color: Colors.black26,
                                    offset: Offset(1, 1),
                                    blurRadius: 2,
                                  ),
                                ],
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ],
                        )
                      : Text(
                          'Skills',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 28,
                            fontWeight: FontWeight.bold,
                            letterSpacing: 1.2,
                            shadows: [
                              Shadow(
                                color: Colors.black26,
                                offset: Offset(1, 1),
                                blurRadius: 2,
                              ),
                            ],
                          ),
                          textAlign: TextAlign.center,
                        ),
                ),
                SizedBox(height: 20),
                // Content
                Container(
                  padding: EdgeInsets.all(20),
                  child: width > 610
                      ? Row(
                          children: [
                            // Image
                            Flexible(
                              flex: 1,
                              child: ClipOval(
                                child: Container(
                                  width: 100,
                                  height: 100,
                                  decoration: BoxDecoration(
                                    shape: BoxShape.circle,
                                    color: Colors.white,
                                    border: Border.all(
                                      color: Colors.blue.shade300,
                                      width: 3,
                                    ),
                                  ),
                                  child: Icon(
                                    Icons.code,
                                    color: Colors.blue.shade300,
                                    size: 60,
                                  ),
                                ),
                              ),
                            ),
                            SizedBox(width: 16),
                            // Skills Progress Bars
                            Flexible(
                              flex: 2,
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: Skills.asMap().entries.map((entry) {
                                  int index = entry.key;
                                  String skill = entry.value;
                                  double percentage = _progressValues[index];
                                  return Padding(
                                    padding: EdgeInsets.only(bottom: 12),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        // Skill Name with typing effect (staggered if animations)
                                        widget.showAnimations
                                            ? FutureBuilder(
                                                future: Future.delayed(Duration(
                                                    milliseconds: 100 * index)),
                                                builder: (context, snapshot) {
                                                  if (snapshot
                                                          .connectionState ==
                                                      ConnectionState.done) {
                                                    return AnimatedTextKit(
                                                      isRepeatingAnimation:
                                                          false,
                                                      animatedTexts: [
                                                        TypewriterAnimatedText(
                                                          skill,
                                                          speed: Duration(
                                                              milliseconds: 30),
                                                          textStyle: skillStyle
                                                              .copyWith(
                                                            fontSize: 16,
                                                            fontWeight:
                                                                FontWeight.w700,
                                                          ),
                                                        ),
                                                      ],
                                                    );
                                                  }
                                                  return Container();
                                                },
                                              )
                                            : Text(
                                                skill,
                                                style: skillStyle.copyWith(
                                                  fontSize: 16,
                                                  fontWeight: FontWeight.w700,
                                                ),
                                              ),
                                        SizedBox(height: 4),
                                        // Static Progress Bar
                                        LinearProgressIndicator(
                                          value: percentage / 100,
                                          backgroundColor: Colors.grey.shade800,
                                          valueColor:
                                              AlwaysStoppedAnimation<Color>(
                                                  Colors.blue.shade400),
                                        ),
                                        SizedBox(height: 8),
                                        Text(
                                          '${percentage.toStringAsFixed(0)}',
                                          style: TextStyle(
                                            color: Colors.white70,
                                            fontSize: 12,
                                          ),
                                        ),
                                      ],
                                    ),
                                  );
                                }).toList(),
                              ),
                            ),
                          ],
                        )
                      : Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            // Image
                            ClipOval(
                              child: Container(
                                width: 80,
                                height: 80,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  color: Colors.white,
                                  border: Border.all(
                                    color: Colors.blue.shade300,
                                    width: 3,
                                  ),
                                ),
                                child: Icon(
                                  Icons.code,
                                  color: Colors.blue.shade300,
                                  size: 50,
                                ),
                              ),
                            ),
                            SizedBox(height: 16),
                            // Skills Progress Bars
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: Skills.asMap().entries.map((entry) {
                                int index = entry.key;
                                String skill = entry.value;
                                double percentage = _progressValues[index];
                                return Padding(
                                  padding: EdgeInsets.only(bottom: 12),
                                  child: Column(
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      // Skill Name with typing effect (staggered if animations)
                                      widget.showAnimations
                                          ? FutureBuilder(
                                              future: Future.delayed(Duration(
                                                  milliseconds: 100 * index)),
                                              builder: (context, snapshot) {
                                                if (snapshot.connectionState ==
                                                    ConnectionState.done) {
                                                  return AnimatedTextKit(
                                                    isRepeatingAnimation: false,
                                                    animatedTexts: [
                                                      TypewriterAnimatedText(
                                                        skill,
                                                        speed: Duration(
                                                            milliseconds: 30),
                                                        textStyle:
                                                            skillStyle.copyWith(
                                                          fontSize: 16,
                                                          fontWeight:
                                                              FontWeight.w700,
                                                        ),
                                                      ),
                                                    ],
                                                  );
                                                }
                                                return Container();
                                              },
                                            )
                                          : Text(
                                              skill,
                                              style: skillStyle.copyWith(
                                                fontSize: 16,
                                                fontWeight: FontWeight.w700,
                                              ),
                                            ),
                                      SizedBox(height: 4),
                                      // Static Progress Bar
                                      LinearProgressIndicator(
                                        value: percentage / 100,
                                        backgroundColor: Colors.grey.shade800,
                                        valueColor:
                                            AlwaysStoppedAnimation<Color>(
                                                Colors.blue.shade400),
                                      ),
                                      SizedBox(height: 8),
                                      Text(
                                        '${percentage.toStringAsFixed(0)}',
                                        style: TextStyle(
                                          color: Colors.white70,
                                          fontSize: 12,
                                        ),
                                        textAlign: TextAlign.center,
                                      ),
                                    ],
                                  ),
                                );
                              }).toList(),
                            ),
                          ],
                        ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
