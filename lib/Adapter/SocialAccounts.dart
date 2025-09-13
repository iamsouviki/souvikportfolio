import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../Variable.dart';

class SocialAccounts extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(left: 10),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          SizedBox(height: 20),
          _buildSocialIcon(Icons.mail_outline, "mailto:" + MAIL_ID),
          SizedBox(height: 15),
          _buildSocialIcon(
              IconData(0xe806, fontFamily: 'MySocialIcons'), LINKEDLN_URL),
          SizedBox(height: 15),
          _buildSocialIcon(
              IconData(0xe800, fontFamily: 'MySocialIcons'), GITHUB_URL),
          SizedBox(height: 15),
          _buildSocialIcon(
              IconData(0xe802, fontFamily: 'MySocialIcons'), TWITTER_URL),
          SizedBox(height: 15),
          _buildSocialIcon(
              IconData(0xe804, fontFamily: 'MySocialIcons'), INSTAGRAM_URL),
          SizedBox(height: 15),
          _buildSocialIcon(
              IconData(0xe801, fontFamily: 'MySocialIcons'), FACEBOOK_URL),
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
