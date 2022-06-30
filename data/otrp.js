/*
 * Add the lists of OTRP events, subdivided by 'subgroups'.
 * The order is important!
 */
const add_otrp_timeline_data = (events) => {
	add_otrpmilestones(events);
	add_otrp_releases(events);
	add_otrp_contributors(events);
	add_otrp_eras(events);
}

// List of milestone events
const add_otrpmilestones = (events) => {
  const short_events = [
    {start: '2017-02-06', content: '<img src="https://github.com/teamhimeh/simutrans/raw/OTRP-distribute/documentation/logo/OTRP_logo.png" /><br>THLeaderH/himeshi announces<br> One-way Two-lane Road Patch'},
    {start: '2021-03-31', content: 'End of OTRP development announced'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'otrp', subgroup: 'milestone', className: 'milestone'}]));
}

// List of contributors events
const add_otrp_contributors = (events) => {
  const short_events = [
  ]
  short_events.forEach((event) => events.add([{...event, group: 'otrp', subgroup: 'contributor', className:'contributor'}]));
}
 
// List of 'Eras'
const add_otrp_eras = (events) => {
  const short_events = [
    {start: '2017-02-06', end: '2021-03-31', content: "himeshi's OTRP", className: 'himeshi'},
  ]
  short_events.forEach((event) => events.add([{...event, type: 'background', group: 'otrp'}]));
}

// List of releases
const add_otrp_releases = (events) => {
  const short_events = [
    {start: '2021-10-06', content: '30_1'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'otrp', subgroup: 'release', className: 'release'}]));
}
