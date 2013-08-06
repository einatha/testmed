//COMMON

Localize = {
	ERROR_COMMON : "Unknown error",
	SERVER_ERROR : "",
	NETWORK_CONNECTION_ERROR : "No network available",
	// pages
	LoginPage : {
		title : "ברוך הבא",
		text : "טויוטה",
		accident_report_btn : "תיעוד תאונה"
	},
	RegistrationPage : {
		first_name: "שם פרטי",
		last_name: "שם משפחה"
	},
	StepPersonPage : {
		title : "תיעוד תאונה",
		cancel_btn : "נקה טופס",
		continue_btn : "המשך",
		license_number_label : "מספר רישוי",
		additional_title : "פרטים נוספים לצורך זירוז הטיפול בתביעה",
		driver_section : "פרטי נהג",
		driver_name_label : "שם נהג:",
		driver_passport_label : "תעודת זהות:",
		cellphone_label : "טלפון:",
		license_date_label : "תאריך הוצאת רשיון:",
		birthday_date_label : "תאריך לידה:",
		contact_section : "פרטי הקשר:",
		contact_name_label : "שם:",
		contact_cellphone_label : "טלפון:",

		ERROR_LICENSE_NUMBER_REQUIRED : "מספר רישוי אינו תקין.",
		ERROR_PASSPORT_NUMBER_REQUIRED : "מספר תעודת זהות אינו תקין"
	},

	StepImagesPage : {
		title : "תיעוד תאונה",
		cancel_btn : "נקה טופס",
		continue_btn : "המשך",
		send_btn : "אשר ושלח",
		photo_desc : [ {
			value : 1,
			text : "נזק לרכב מבוטח"
		}, {
			value : 2,
			text : "נזק לרכב מעורב"
		}, {
			value : 3,
			text : "מסמכים"
		}, {
			value : 4,
			text : "אחר"
		} ],
		action_sheet_options : {
			gallery : "Gallery",
			camera : "Camera",
			_delete : "Delete",
			cancel : "Cancel"
		},

		ERROR_RESIZE_IMAGE_FAILED : "Current platform not supported canvas tehnology (need to resize images) or other error during resize image",
		ERROR_CAPTURE_INTERNAL_ERR : "Camera or microphone failed to capture image or sound.",
		ERROR_CAPTURE_APPLICATION_BUSY : "Camera application or audio capture application is currently serving other capture request.",
		ERROR_CAPTURE_NOT_SUPPORTED : "The requested capture operation is not supported.",
		ERROR_GALLERY_NOT_SUPPORTED : "The gallery operation is not supported.",
		ERROR_GALLERY_INTERNAL_ERR : "Gallery operation failed to get image from gallery.",
	/*
	 * ERROR_DATA_INCORRECT : "הפרטים שהוקשו אינם תקינים
	 * אנא הקש שוב פרטים",//inserted user details is incorrect,
	 * please re-enter ERROR_NO_DATA : "תקלת תקשורת אנא נסה
	 * שוב (6011)",//can't pay (error or no connection)
	 * ERROR_DATA_WRONG_FORMAT : "תקלת תקשורת אנא נסה שוב
	 * (6012)",//pay response recived from server but in wrong format
	 * ERROR_ANSWER_INCORRECT : "תקלת תקשורת אנא נסה שוב
	 * (600120)"//action code from citypay answer is incorrect (request data is
	 * incorrect, payment is not exist)
	 */},

	StepAccidentDetailsPage : {
		search_for_city : "חפש עיר",
		search_for_street : "חפש רחוב",
		title : "תיעוד תאונה",
		cancel_btn : "נקה טופס",
		continue_btn : "המשך",
		localize_btn : "מיקום נוכחי",
		localize_btn_remove : "הסר מיקום נוכחי",
		additional_title : "נא הזן את פרטי הארוע",
		place_section : "מיקום הארוע:",
		back : "חזור",
		settlement_label : "ישוב:",
		city_label : "רחוב",
		free_text_label : "טקסט חופשי:",
		event_time_label : "זמן הארוע:",
		no_city_entered_and_streets_clicked : "נא הכנס ישוב",
		description_section : "תיאור הארוע:",

		description_label : "תיאור הארוע:",
		damage_label : "תיאור נזק:"
	},

	StepVehiclesInvolvedPage : {
		title : "תיעוד תאונה",
		cancel_btn : "נקה טופס",
		continue_btn : "המשך",
		add_btn : "הוסף רכב מעורב",
		svipRemoveBtn : "הסר רכב מעורב",
		additional_title : "נא הזן את פרטי הארוע",
		not_exist_checkbox_label : "אין רכב מעורב",

		involved_section : "רכב מעורב:",
		driver_name_label : "שם הנהג:",
		driver_passport_label : "תעודת זהות:",
		cellphone_label : "טלפון:",
		license_number_label : "מספר רישוי:",
		policy_number_label : "מספר פוליסה:",
		insurance_company_label : "חברת ביטוח:"
	},

	StepWitnessesPage : {
		title : "תיעוד תאונה",
		additional_title : "נא הזן פרטי עדים שנכחו במקום",
		section_title : "פרטי עד:",
		witness_name_label : "שם העד",
		comments : "הערות",
		cancel_btn : "נקה טופס",
		continue_btn : "המשך",
		add_btn : "הוסף עד",
		swpRemoveBtn : "הסר עד",
		not_exist_checkbox_label : "",

		involved_section : "רכב מעורב:",
		driver_name_label : "שם הנהג:",
		driver_passport_label : "תעודת זהות:",
		cellphone_label : "טלפון:",
		license_number_label : "מספר רישוי:",
		policy_number_label : "מספר פוליסה:",
		insurance_company_label : "חברת ביטוח:"
	},
	StepCompletionPage : {
		title : "תיעוד תאונה",
		additional_title : "נא אשר את פרטי הטופס טרם לחיצה על השליחה",
		send : "שלח"
	},
	// Page Transition Loader
	Loader : {
		title : "טוען..."
	},
	// Common utils
	Utils : {
		alert_title : " ",// "Comtec",
		alert_ok : "אישור"
	},

	// Objects
	Person : {
		error_msg_numeric : " - הקלד מספרים בלבד",
		error_msg_wrong_license_number : "License number is required, not empty, between 5 and 7 numbers",
		error_msg_wrong_passport : "ת\"ז אינה תקינה",
	}
}