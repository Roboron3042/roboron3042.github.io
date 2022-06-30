/*
 * Add the lists of Iron Bite events, subdivided by 'subgroups'.
 * The order is important!
 */
const add_ironbite_timeline_data = (events) => {
	add_ironbite_major(events);
	add_ironbite_eras(events);
}

// List of major events
const add_ironbite_major = (events) => {
  const short_events = [
    {start: '2012-02-03', content: '<img src="https://a.fsdn.com/allura/p/ironsimu/icon?1385411551?&w=90" height="30px" /><br>Hajo announces<br>Simutrans Iron Bite'},
    {start: '2014-07-29', content: 'Last contribution to<br>Simutrans Iron Bite'},
  ]
  short_events.forEach((event) => events.add([{...event, group: 'otrp', subgroup: 'major', className: 'major'}]));
}
 
// List of 'Eras'
const add_ironbite_eras = (events) => {
  const short_events = [
    {start: '2012-02-03', end: '2014-07-29', content: 'Simutrans Ironbite', className: 'hajo'},
  ]
  short_events.forEach((event) => events.add([{...event, type: 'background', group: 'otrp'}]));
}
