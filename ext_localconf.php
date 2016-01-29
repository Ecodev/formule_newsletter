<?php
if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript(
    'formule_newsletter',
    'setup',
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:formule_newsletter/Configuration/TypoScript/setup.ts">'
);