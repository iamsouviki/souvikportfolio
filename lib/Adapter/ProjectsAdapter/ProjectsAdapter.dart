// Refactored to align with Education.dart conventions:
// - Parameter names changed to camelCase (e.g., ProjectName -> projectName).
// - Fixed typos (hight -> height, ForthTechnology -> fourthTechnology).
// - Added optional Key? to constructor (non-const for hot reload compatibility).
// - Structure: Card with elevation, rounded borders, transparent bg; inner Container with opacity.
// - Consistent padding (16), sizing, TextStyles (white, letterSpacing 1.2, shadows for title).
// - Logo: Conditional ClipRRect Image with fixed size.
// - Technologies: Compact Row with consistent styling.
// - Button: Updated to launchUrl, white styling, opacity bg.
// - Responsive font sizes based on width > 600.
// - Removed unnecessary imports and FittedBox for simplicity.
// - Added shadows and bold weights matching Education.dart.

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class ProjectAdapter extends StatefulWidget {
  final String projectName;
  final String projectLogoPath;
  final String projectDescription;
  final String projectDescriptionForMobile;
  final String firstTechnology;
  final String secondTechnology;
  final String thirdTechnology;
  final String fourthTechnology;
  final String projectUrl;

  ProjectAdapter({
    Key? key,
    required this.projectName,
    required this.projectLogoPath,
    required this.projectDescription,
    required this.projectDescriptionForMobile,
    required this.firstTechnology,
    required this.secondTechnology,
    required this.thirdTechnology,
    required this.fourthTechnology,
    required this.projectUrl,
  }) : super(key: key);

  @override
  State<ProjectAdapter> createState() => _ProjectAdapterState();
}

class _ProjectAdapterState extends State<ProjectAdapter> {
  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    height = height > 600 ? height : 600;
    width = width > 300 ? width : 300;

    // Responsive top margin matching original logic
    EdgeInsets margin = width > 600
        ? const EdgeInsets.only(top: 60)
        : const EdgeInsets.only(top: 30);

    return Padding(
      padding: margin,
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
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // Header: Logo and Project Name (aligned like Education title)
              Container(
                padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 4),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // Conditional logo with fixed size, matching Education image styling
                    if (widget.projectLogoPath.isNotEmpty)
                      ClipRRect(
                        borderRadius: BorderRadius.circular(12),
                        child: Container(
                          width: 24,
                          height: 24,
                          decoration: BoxDecoration(
                            color: Colors.white,
                            border: Border.all(
                              color: Colors.blue.shade300,
                              width: 1,
                            ),
                          ),
                          child: Image.asset(
                            widget.projectLogoPath,
                            fit: BoxFit.contain,
                          ),
                        ),
                      ),
                    if (widget.projectLogoPath.isNotEmpty)
                      const SizedBox(width: 16),
                    // Project Name with Education-like styling (bold, shadows, responsive size)
                    Expanded(
                      child: Text(
                        widget.projectName,
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: width > 600 ? 22 : 18,
                          fontWeight: FontWeight.bold,
                          letterSpacing: 1.2,
                          shadows: const [
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
                  ],
                ),
              ),
              const SizedBox(height: 20),
              // Description (full white, no opacity, like Education texts)
              Text(
                width > 600
                    ? widget.projectDescription
                    : widget.projectDescriptionForMobile,
                style: TextStyle(
                  color: Colors.white,
                  fontSize: width > 600 ? 18 : 15,
                  letterSpacing: 1.2,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 13),
              // Technologies (wrapped for mobile, like projectDescription)
              Wrap(
                alignment: WrapAlignment.center,
                children: [
                  const Text(
                    "Technologies Used: ",
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 12,
                      fontWeight: FontWeight.w700,
                      letterSpacing: 1.2,
                    ),
                  ),
                  const SizedBox(width: 4),
                  ...[
                    widget.firstTechnology,
                    widget.secondTechnology,
                    widget.thirdTechnology,
                    widget.fourthTechnology,
                  ].map((tech) => Padding(
                        padding: const EdgeInsets.only(left: 4),
                        child: Text(
                          tech,
                          style: const TextStyle(
                            color: Colors.white,
                            fontSize: 12,
                            fontWeight: FontWeight.w700,
                            letterSpacing: 1.2,
                          ),
                        ),
                      )),
                ],
              ),
              const SizedBox(height: 16),
              // Project Link Button (updated styling: white text/icon, opacity bg like Education)
              Container(
                width: 200,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30),
                  color: Colors.white.withOpacity(0.2),
                ),
                child: TextButton(
                  onPressed: () => launchUrl(Uri.parse(widget.projectUrl)),
                  style: TextButton.styleFrom(
                    padding:
                        const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    backgroundColor: Colors.transparent,
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(
                        IconData(0xe800, fontFamily: 'MySocialIcons'),
                        color: Colors.white,
                        size: 16,
                      ),
                      const SizedBox(width: 8),
                      Text(
                        "Project Link",
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 14,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
