import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:velocity_x/velocity_x.dart';
import 'package:flutter/widgets.dart';

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
      borderRadius: BorderRadius.circular(50),
      child: Container(
        padding: EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: Colors.white.withOpacity(0.1),
          borderRadius: BorderRadius.circular(50),
        ),
        child: Icon(
          iconData,
          color: Colors.white,
          size: 28,
        ),
      ),
    );
  }
}
