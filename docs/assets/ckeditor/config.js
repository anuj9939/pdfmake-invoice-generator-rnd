CKEDITOR.editorConfig = function (config) {
	// Define changes to default configuration here. For example:
	//config.language = 'fr';
	config.toolbarGroups = [
		// { name: 'document', groups: ['mode', 'document', 'doctools'] },
		{ name: 'clipboard', groups: ['clipboard', 'undo'] },
		{ name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
		{ name: 'ckwebspeech' },
		// { name: 'forms' },
		// '/',
		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
		// { name: 'links' },
		// { name: 'insert' },
		// '/',
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' }
		// { name: 'others' },

	];
	config.extraPlugins = 'ckwebspeech';
	config.ckwebspeech = {
		'culture': 'en-IN',
		'commandvoice': 'hello', // trigger command listener
		'commands': [            // action list
			// {'[action]': '['text to trigger action']'}
			{ 'newline': 'next line' },
			{ 'newparagraph': 'new paragraph' },
			{ 'undo': 'undo' },
			{ 'redo': 'redo' },
		]
	},
		config.allowedContent = true,
		//config.resize_enabled: false,
		//config.removePlugins: 'elementspath, save , magicline',        
		config.height = '250px',
		config.extraPlugins = 'divarea',
		config.width = '90%',
		config.removeDialogTabs = 'image:advanced;flash:advanced',
		//config.format_tags: 'p;h1;h2;h3;pre;div;'
		config.removeButtons = 'Save,NewPage,Preview,Print,Templates,document,Form,Checkbox,TextField,Textarea,Select,Button,ImageButton,Radio,HiddenField,Strike,Blockquote,CreateDiv,BidiLtr,BidiRtl,Link,Unlink,Anchor,Flash,Smiley,SpecialChar,Iframe,ShowBlocks,About,exportpdf,Maximize,Language'
	// config.uiColor = '#AADC6E';
};
