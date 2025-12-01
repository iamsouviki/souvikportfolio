import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../Variable.dart';

// Define constant IconData for custom social icons
const IconData linkedInIcon = IconData(0xe806, fontFamily: 'MySocialIcons');
const IconData githubIcon = IconData(0xe800, fontFamily: 'MySocialIcons');
const IconData twitterIcon = IconData(0xe802, fontFamily: 'MySocialIcons');
const IconData instagramIcon = IconData(0xe804, fontFamily: 'MySocialIcons');
const IconData facebookIcon = IconData(0xe801, fontFamily: 'MySocialIcons');

class SocialAccounts extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(left: 10),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          SizedBox(height: 20),
          _buildSocialIcon(Icons.mail_outline, "mailto:$MAIL_ID"),
          SizedBox(height: 15),
          _buildSocialIcon(linkedInIcon, LINKEDLN_URL),
          SizedBox(height: 15),
          _buildSocialIcon(githubIcon, GITHUB_URL),
          SizedBox(height: 15),
          _buildSocialIcon(twitterIcon, TWITTER_URL),
          SizedBox(height: 15),
          _buildSocialIcon(instagramIcon, INSTAGRAM_URL),
          SizedBox(height: 15),
          _buildSocialIcon(facebookIcon, FACEBOOK_URL),
        ],
      ),
    );
  }

  Widget _buildSocialIcon(IconData iconData, String url) {
    return InkWell(
      onTap: () {
        launch(url);
      },
      borderRadius: BorderRadius.circular(30),
      splashColor: secondaryColor.withOpacity(0.2),
      highlightColor: secondaryColor.withOpacity(0.1),
      child: Container(
        width: 60,
        height: 60,
        decoration: BoxDecoration(
          color: surfaceColor,
          borderRadius: BorderRadius.circular(30),
          boxShadow: [
            BoxShadow(
              color: Colors.black26,
              blurRadius: 4,
              offset: Offset(0, 2),
            ),
          ],
          border: Border.all(
            color: primaryColor.withOpacity(0.2),
            width: 1,
          ),
        ),
        child: Center(
          child: Icon(
            iconData,
            color: secondaryColor,
            size: iconSize,
          ),
        ),
      ),
    );
  }
}
