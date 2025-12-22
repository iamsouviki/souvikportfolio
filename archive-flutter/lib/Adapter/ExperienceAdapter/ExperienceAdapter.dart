import 'package:flutter/material.dart';

class ExperienceAdapter extends StatefulWidget {
  final String CompanyLogoPath;
  final String CompanyName;
  final String WorkDescription;
  final String WorkDuration;
  final String WorkDetails;

  const ExperienceAdapter({
    Key? key,
    required this.CompanyLogoPath,
    required this.CompanyName,
    required this.WorkDescription,
    required this.WorkDuration,
    required this.WorkDetails,
  }) : super(key: key);

  @override
  State<ExperienceAdapter> createState() => _ExperienceAdapterState();
}

class _ExperienceAdapterState extends State<ExperienceAdapter> {
  late double height, width;

  @override
  Widget build(BuildContext context) {
    height = MediaQuery.of(context).size.height > 600
        ? MediaQuery.of(context).size.height
        : 600;
    width = MediaQuery.of(context).size.width > 300
        ? MediaQuery.of(context).size.width
        : 300;

    final double logoSize = width > 600 ? 60.0 : 50.0;

    return Container(
      width: MediaQuery.of(context).size.width,
      margin: width > 600
          ? const EdgeInsets.only(top: 60)
          : const EdgeInsets.only(top: 30),
      child: Card(
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
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  // Logo
                  ClipOval(
                    child: Container(
                      width: logoSize,
                      height: logoSize,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.white,
                        border: Border.all(
                          color: Colors.blue.shade300,
                          width: 3,
                        ),
                      ),
                      child: Image.asset(
                        widget.CompanyLogoPath,
                        fit: BoxFit.fill,
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  // Company Name
                  Text(
                    widget.CompanyName,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: width > 600 ? 24 : 18,
                      fontWeight: FontWeight.w700,
                      letterSpacing: 1.2,
                      shadows: [
                        Shadow(
                          color: Colors.black26,
                          offset: const Offset(1, 1),
                          blurRadius: 2,
                        ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 12),
                  // Work Description
                  Text(
                    widget.WorkDescription,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: width > 600 ? 17 : 15,
                      fontWeight: FontWeight.w700,
                    ),
                  ),
                  const SizedBox(height: 12),
                  // Work Details
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    child: Text(
                      widget.WorkDetails,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: width > 600 ? 14 : 12,
                        fontWeight: FontWeight.w700,
                        height: 1.6,
                      ),
                    ),
                  ),
                  const SizedBox(height: 12),
                  // Work Duration
                  Text(
                    widget.WorkDuration,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.w700,
                      fontStyle: FontStyle.italic,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
