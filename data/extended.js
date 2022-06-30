 /*
  * Add the lists of Extended events, subdivided by 'subgroups'.
  * The order is important!
  */
const add_extended_timeline_data = (events) => {
	add_extended_major(events);
	add_extended_releases(events);
	add_extended_contributors(events);
	add_extended_eras(events);
    add_extended_paksets(events);
}

// List of major events
const add_extended_major = (events) => {
  const short_events = [
    {start: '2009-01-21', content: 'Simutrans Experimental is born'},
    {start: '2017-01', content: 'Simutrans Experimental is<br>renamed to Simutrans Extended'},
    {start: '2022-04-03', content: 'Elevated way supports'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'extended', subgroup: 'major', className: 'major'}]));
}

// List of contributors events
const add_extended_contributors = (events) => {
  const short_events = [
    {start: '2008-12-04', content: '<img src="https://forum.simutrans.com/custom_avatar/avatar_53_1470856190.jpg" /><br>Jamespetts starts contributing'},
	{start: '2017-07-01', content: 'Phystam joins'},
	{start: '2018-04-28', content: '<img src="https://forum.simutrans.com/custom_avatar/avatar_11892_1648587872.png" /><br>Ranran joins'},
	{start: '2021-04-30', content: 'PJMack joins'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'extended', subgroup: 'contributor', className:'contributor'}]));
}

// List of 'Eras'
const add_extended_eras = (events) => {
  const short_events = [
    {start: '2009-01-21', end: '2022-07', content: 'Jamespetts lead', className: 'jamespetts'},
  ]
  short_events.forEach((event) => events.add([{...event, type: 'background', group: 'extended'}]));
}

// List of pakset events
const add_extended_paksets = (events) => {
  const short_events = [
    {start: '2018-09-06', content: 'Pak256-Ex 1.0.0'},
    {start: '2019-09-08', content: 'Pak256-Ex 2.0.0'},
  ]
  short_events.forEach((event) => events.add([{...event,  group: 'extended', subgroup: 'pakset', className: 'pakset'}]));
}

// List of releases
const add_extended_releases = (events) => {
  const short_events = [
    {start: '2013-06-10', content: '11.00'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'extended', subgroup: 'release', className: 'release'}]));
}
