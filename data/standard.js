/*
 * Add the lists of Simutrans events, subdivided by 'subgroups'
 * The order is important!
 */
const add_standard_timeline_data = (events) => {
	add_non_simutrans(events);
	add_standard_major(events);
	add_standard_releases(events);
	add_standard_contributors(events);
	add_standard_eras(events);
    add_standard_paksets(events)
}

// List of major events
const add_standard_major = (events) => {
  const short_events = [
    {start: '1997-06', content: 'Hansjörg Malthaner "Hajo" starts working on Simutrans'},
    {start: '2007-05', content: '<img src= "http://assets.stickpng.com/images/58481842cef1014c0b5e49a2.png" /><br>Simutrans becomes<br> open source'},
    {start: '2008-02-29', content: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Openlogo-debianV2.svg/375px-Openlogo-debianV2.svg.png" /><br>Debian<br>packages<br>Simutrans'},
    {start: '2008-11-14', content: '<img src="https://graphics.simutrans.com/albums/userpics/10003/simutrans-logo.png" /><br>Modern logo'},
    {start: '2012-04', content: '<img src="https://seeklogo.com/images/S/sourceforge-logo-0372412E49-seeklogo.com.png" /><br>+100k downloads/month'},
    {start: '2015-04', content: '<img src="https://seeklogo.com/images/S/sourceforge-logo-0372412E49-seeklogo.com.png" /><br>Project of<br>the Month'},
    {start: '2016-05-24', content: '<img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" /><br>Steam<br>Release'},
    {start: '2022-01-14', content: 'Scenario tutorial included<br>in pak64 and pak128'},
    {start: '2022-05-26', content: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/512px-Google_Play_Arrow_logo.svg.png" /><br>Play Store<br>Release'},
    //{start: '2022-06', content: 'Simutrans has been in development for 25 years!'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'standard', subgroup: 'major', className: 'major'}]));
}

// List of contributors events
const add_standard_contributors = (events) => {
  const short_events = [
    {start: '2001-01', content: "prissi discovers simutrans"},
    {start: '2004-11-27', content: "prissi's first patch"},
    {start: '2009-07-29', content: "Ters joins"},
    {start: '2010-02-04', content: "TurfIt joins"},
    {start: '2011-09-23', content: "<img src='https://www.mediafire.com/convkey/807c/aec9av4dc5uicnd6g.jpg' /><br>YonaTYT joins"},
    {start: '2013-03-25', content: "<img src='https://forum.simutrans.com/custom_avatar/avatar_10123_1543441188.png' /><br>Flemmbrav joins"},
    {start: '2015-12-08', content: "HaydenRead joins"},
    {start: '2019-06-15', content: "<img src='https://avatars.githubusercontent.com/u/15730241?s=40&v=4' /><br>128na starts working on<br>the Simutrans Addon Portal"},
    {start: '2020-10-09', content: "<img src='https://forum.simutrans.com/custom_avatar/avatar_11603_1533905631.png' height='30px' /><br>Roboron takes over<br> Simutrans on Steam"},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'standard', subgroup: 'contributor', className:'contributor'}]));
}

// List of non-Simutrans events to help position Simutrans in the history of trasnportation simulation games
const add_non_simutrans = (events) => {
    const short_events = [
    {start: '1994-11-15', content: 'Transport Tycoon is released'},
    {start: '2004-03-01', content: 'Initial OpenTTD release'},
    {start: '2004-09-01', content: 'Locomotion is released'},
    {start: '2018-01-01', content: 'Initial OpenLoco release'},
  ]
  short_events.forEach((event) => events.add([{...event, type: 'point', group: 'standard', subgroup: 'other', className:'other'}]));
}

// List of pakset events
const add_standard_paksets = (events) => {
  const short_events = [
    {start: '2009-02-14', content: 'Initial Pak192.Comic release'},
    {start: '2018-12-28', content: 'PAK128.German 1.0'},
    {start: '2020-10-21', content: 'PAK128.German 2.0'},
  ]
  short_events.forEach((event) => events.add([{...event,  group: 'standard', subgroup: 'pakset', className: 'pakset'}]));
}

// List of 'Eras'
const add_standard_eras = (events) => {
  const short_events = [
    {start: '1997-06', end: '2005-01', content: 'Hansjörg Malthaner "Hajo" lead', className: 'hajo'},
    {start: '2005-01', end: '2022-07', content: 'Markus Pristovsek "Prissi" lead', className: 'prissi'},
  ]
  short_events.forEach((event) => events.add([{...event, type: 'background', group: 'standard'}]));
}

// List of releases
const add_standard_releases = (events) => {
  const short_events = [
    {start: '1999-03-06', content: 'First public release'},
    {start: '2001-04-08', content: '0.78'},
    {start: '2001-09-26', content: '0.79'},
    {start: '2002-01-02', content: '0.80'},
    {start: '2002-10-06', content: '0.81'},
    {start: '2003-06-17', content: '0.82'},
    {start: '2003-12-22', content: '0.83'},
    {start: '2004-02-02', content: '0.84'},
    {start: '2005-02-19', content: '0.85'},
    {start: '2005-03-20', content: '86'},
    {start: '2005-10-27', content: '87'},
    {start: '2005-11-22', content: '88'},
    {start: '2006-06-01', content: '89'},
    {start: '2006-09-02', content: '90'},
    {start: '2006-09-10', content: '99'},
    {start: '2008-06-28', content: '100'},
    {start: '2009-01-03', content: '101'},
    {start: '2009-03-05', content: '102'},
    {start: '2009-10-18', content: '102.2'},
    {start: '2009-12-09', content: '102.2.1'},
    {start: '2010-03-08', content: '102.2.2'},
    {start: '2011-02-14', content: '110'},
    {start: '2011-03-12', content: '110.0.1'},
    {start: '2011-11-01', content: '111'},
    {start: '2012-01-23', content: '111.1'},
    {start: '2012-02-28', content: '111.2.1'},
    {start: '2012-03-20', content: '111.2.2'},
    {start: '2012-06-10', content: '111.3'},
    {start: '2012-10-22', content: '112'},
    {start: '2012-12-23', content: '112.1'},
    {start: '2013-03-17', content: '112.2'},
    {start: '2013-05-17', content: '112.3'},
    {start: '2014-04-28', content: '120'},
    {start: '2014-11-15', content: '120.0.1'},
    {start: '2015-10-31', content: '120.1'},
    {start: '2015-11-04', content: '120.1.1'},
    {start: '2016-01-07', content: '120.1.2'},
    {start: '2016-02-02', content: '120.1.3'},
    {start: '2016-02-12', content: '120.2'},
    {start: '2017-02-26', content: '120.2.1'},
    {start: '2017-03-31', content: '120.2.1'},
    {start: '2018-06-15', content: '120.3'},
    {start: '2018-09-09', content: '120.4'},
    {start: '2018-09-23', content: '120.4.1'},
    {start: '2019-12-01', content: '121'},
    {start: '2020-10-10', content: '122'},
    {start: '2021-12-30', content: '123'},
    {start: '2022-01-29', content: '123.1'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'standard', subgroup: 'release', className: 'release'}]));
}
