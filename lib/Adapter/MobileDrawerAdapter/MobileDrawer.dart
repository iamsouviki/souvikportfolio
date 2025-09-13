import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class MobileDrawer extends StatefulWidget {
  @override
  _MobileDrawerState createState() => _MobileDrawerState();
}

class _MobileDrawerState extends State<MobileDrawer> {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 170,
      padding: EdgeInsets.zero,
      color: Colors.black,
      child: ListView(
        children: [
          ListTile(
            leading: Icon(
              Icons.home,
              color: Colors.white,
            ),
            title: Text(
              "Home",
              style: TextStyle(color: Colors.white, fontSize: 12),
            ),
            onTap: () {
              Navigator.pop(context);
              context.go('/');
            },
          ),
          ListTile(
            leading: Icon(
              Icons.person,
              color: Colors.white,
            ),
            title: Text(
              "About",
              style: TextStyle(color: Colors.white, fontSize: 12),
            ),
            onTap: () {
              Navigator.pop(context);
              context.go('/about');
            },
          ),
          ListTile(
            leading: Icon(
              Icons.work,
              color: Colors.white,
            ),
            title: Text(
              "Experience",
              style: TextStyle(color: Colors.white, fontSize: 12),
            ),
            onTap: () {
              Navigator.pop(context);
              context.go('/experience');
            },
          ),
          ListTile(
            leading: Icon(
              Icons.article_outlined,
              color: Colors.white,
            ),
            title: Text(
              "Project",
              style: TextStyle(color: Colors.white, fontSize: 12),
            ),
            onTap: () {
              Navigator.pop(context);
              context.go('/projects');
            },
          ),
        ],
      ),
    );
  }
}
