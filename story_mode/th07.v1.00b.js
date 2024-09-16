{
	"binhacks": {
		"remove_1cc_requirement_for_Good_Ending": {
			"enable": false,
			"addr": "Rx1E74B",
			"code": "EB 13",
			"expected": "74 13"
		},
		"change_1cc_requirement_to_Normal+_Clear": {
			"enable": true,
			"addr": "Rx1E73F",
			"code": "\
0FB6 05 80626200 \
909090 \
85 C0 \
75 13 \
",
			"expected": "\
8B 15 78626200 \
0FB6 42 20 \
85 C0 \
74 13 \
"
		}
	}
}