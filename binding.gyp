{
	'targets': [
		{
			'target_name': 'authenticate_pam',
			'sources': [ 'src/authenticate_pam.cc' ],
			'libraries': [ '-lpam' ],
      'include_dirs' : [
        "<!(node -e \"require('nan')\")"
      ]
		}
	]
}