'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Twitter',
		url: 'https://twitter.com/nyakuro'
	},
	{
		label: 'Website (music)',
		url: 'https://sugarmosaic.com'
	},
	{
		label: 'Bandcamp',
		url: 'https://sugarmosaic.bandcamp.com/releases'
	},
	{
		label: 'Sound Cloud',
		url: 'https://soundcloud.com/nyakuro'
	},
	{
		label: 'Pixiv (Illustration)',
		url: 'https://www.pixiv.net/member.php?id=301649'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/nyakuro'
	},
	{
		label: 'Blog',
		url: 'http://cat-b.hatenadiary.jp/'
	},
	{
		label: 'Contact',
		url: 'http://sugarmosaic.com/contact/'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I’m a web-app programmer(PHP, Javascript, Python), a songwriter, and a illustrator.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
