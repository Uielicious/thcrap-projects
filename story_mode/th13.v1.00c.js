{
	"binhacks": {
		"remove_1cc_requirement_for_Good_Ending": {
			"enable": false,
			"addr": "Rx1626E",
			"code": "EB 05",
			"expected": "74 05"
		},
		"change_1cc_requirement_to_Normal+_Clear": {
			"enable": true,
			"addr": "Rx16262",
			"code": "\
83 3D C4E74B00 00  \
BA 01000000 \
75 05 \
",
			"expected": "\
83 3D C8E74B00 00  \
BA 01000000 \
74 05 \
"
		}
	}
}