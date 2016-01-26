<?php

/***************************************************************
 * Extension Manager/Repository config file for ext: "formule"
 *
 * Auto generated by Extension Builder 2015-12-29
 *
 * Manual updates:
 * Only the data in the array - anything else is removed by next write.
 * "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
	'title' => 'Various forms for Newsletter purposes',
	'description' => 'Handle Newsletter workflow such as new subscription, newsletter preferences edition - based on extension "formule"',
	'category' => 'plugin',
	'author' => 'Udriot Fabien',
	'author_email' => 'fabien.udriot@ecodev.ch',
	'state' => 'beta',
	'version' => '0.9.0-dev',
	'constraints' => array(
		'depends' => array(
			'typo3' => '6.2.0-7.99.99',
			'formule' => '',
			'tt_address' => '',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
);