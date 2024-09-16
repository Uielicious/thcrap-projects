{
	"binhacks": {
		"remove_1cc_requirement_for_Good_Ending": {
			"enable": false,
			"addr": "Rx1FBE2",
			"code": "EB 05",
			"expected": "74 05"
		},
		"change_1cc_requirement_to_Normal+_Clear": {
			"enable": true,
			"addr": "Rx1FBDB",
			"code": "\
83 3D 34584F00 00  \
75 05 \
",
			"expected": "\
83 3D 38584F00 00  \
74 05 \
"
		}
	}
}