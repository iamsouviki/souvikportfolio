import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class ExperienceAdapter extends StatefulWidget {
  final String CompanyLogoPath;
  final String CompanyName;
  final String WorkDescription;
  final String WorkDescriptionForMobile;
  final String WorkDuration;

  const ExperienceAdapter(
      {Key? key,
      required this.CompanyLogoPath,
      required this.CompanyName,
      required this.WorkDescription,
      required this.WorkDescriptionForMobile,
      required this.WorkDuration})
      : super(key: key);

  @override
  _ExperienceAdapterState createState() => _ExperienceAdapterState();
}

class _ExperienceAdapterState extends State<ExperienceAdapter> {
  late double hight, width;
  @override
  Widget build(BuildContext context) {
    hight = MediaQuery.of(context).size.height > 600
        ? MediaQuery.of(context).size.height
        : 600;
    width = MediaQuery.of(context).size.width > 300
        ? MediaQuery.of(context).size.width
        : 300;
    return Container(
        margin:
            width > 600 ? EdgeInsets.only(top: 60) : EdgeInsets.only(top: 30),
        padding: EdgeInsets.all(15.0),
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10.0),
            border: Border.all(color: Colors.white.withOpacity(0.7), width: 1)),
        child: Column(
          children: [
            Container(
              child: Column(
                children: [
                  FittedBox(
                    fit: BoxFit.contain,
                    child: Row(
                      children: [
                        FittedBox(
                          fit: BoxFit.contain,
                          child: Container(
                            height: 30,
                            width: 30,
                            child: Image.asset(widget.CompanyLogoPath),
                          ),
                        ),
                        FittedBox(
                          fit: BoxFit.contain,
                          child: Container(
                            padding: EdgeInsets.only(left: 25),
                            child: Text(
                              widget.CompanyName,
                              style: TextStyle(
                                  fontSize: width > 600 ? 20 : 15,
                                  color: Colors.white,
                                  letterSpacing: 3),
                            ),
                          ),
                        )
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 7,
                  ),
                  FittedBox(
                    fit: BoxFit.contain,
                    child: Text(
                        width > 600
                            ? widget.WorkDescription
                            : widget.WorkDescriptionForMobile,
                        style: TextStyle(
                            fontSize: width > 600 ? 15 : 12,
                            color: Colors.white.withOpacity(0.6))),
                  ),
                  SizedBox(
                    height: 7,
                  ),
                  FittedBox(
                    fit: BoxFit.contain,
                    child: Text(widget.WorkDuration,
                        style: TextStyle(
                            fontSize: 10,
                            color: Colors.white.withOpacity(0.5),
                            letterSpacing: 2)),
                  )
                ],
              ),
            ),
          ],
        ));
  }
}
