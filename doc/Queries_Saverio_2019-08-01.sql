-- *****************************************************************************
-- ***  THE FIRST TWO QUERIES RETRIEVE DATA FOR TILES 1 AND 2 OF THE PORTAL  ***
-- *****************************************************************************


-- ******************
-- ***  Episodes  ***
-- ******************
-- THIS SELECT RETURNS ONE ROW PER EPISODE
-- Notes:
--     - Encounters (episodes) can be linked to a Costing Dataset via the "CostingDataset_Encounter" table (see the "COSTS" query below)
--       (WARNING: The JOIN on the "CostingDataset_Encounter" table can multiply rows returned by the query below for episodes that span two or more financial years)
SELECT
	   AE.Id AS Activity_Encounter_Id,						-- Primary key of the "Activity_Encounter" table
															-- Linked to portal element "NOMBRE D'ÉPISODES"  (COUNT(Activity_Encounter_Id))
	   ECD.Id AS Establishment_CostingDataset_Id,
	   ECD.CostingDataSetName,								
	   ECD.CostingDataSet_localNumber,						
	   AE.Patient_Id,										-- Linked to portal element "NOMBRE DE PATIENTS" (has to be a "COUNT(DISTINCT Patient_Id)")
	   AE.EncounterNumber,	
	   AEE.AdmitDecisionTime,								-- Linked to portal elements "DMS AVANT DEM" and "DMS APRES DEM"  (
	   AE.StartDateTime,									-- Linked to portal elements "DMS AVANT DEM" ("DMS avant dem" = AdmitDecisionTime - StartDateTime) 									
	   AE.EndDateTime,										-- Linked to portal elements "DMS APRES DEM" ("DMS apres dem" = EndDateTime - AdmitDecisionTime) 								
	   AE.EncounterStartedBeforeBeginningOfFinancialYear,	
	   AE.EncounterCompletedAfterEndOfFinancialYear,
	   AE.Encounter_CostingCompleted,						-- Linked to portal element "STATUT D'ÉPISODE"		
	   RE.Id AS Establishment_Id,							
	   RE.Code AS EstablishmentCode,						
	   RE.CPSSDescription AS EstablishmentDesc,				
	   RE.Abbreviation AS EstablishmentAbbreviation,		-- Linked to portal element "ESTABLISHMENT"		
	   RH.Code AS HospitalCode,								
	   RH.Abbreviation AS HospitalAbbreviation,				-- Linked to portal element "INSTALLATION"
	   RH.[Description] AS HospitalDesc,					
	   RAC.Code AS AdmissionCategoryCode,					-- Linked to portal elements "PRIORITÉ TRIAGE - URGENCE" and "TYPE D'ADMISSION"  (code)
	   RAC.[Description] AS AdmissionCategoryDesc,			-- Linked to portal elements "PRIORITÉ TRIAGE - URGENCE" and "TYPE D'ADMISSION"  (description)
	   RACN.Code AS AdmissionCategoryCode_Normalized,
	   RACN.[Description] AS AdmissionCategoryDesc_Normalized,
	   REC.Code AS EncounterCategoryCode,					-- Linked to portal element "AMB AUTRES"  ("Amb autres" : EncounterTypeCode = 'E' AND EncounterCategoryCode <> 'CH-CDJ')
															-- Linked to portal element "COURTE DURÉE"  ("Courte durée" : EncounterTypeCode = 'A' AND EncounterCategoryCode = 'CH-CD')
															-- Linked to portal element "CDJ"  ("CDJ" : EncounterTypeCode = 'E' AND EncounterCategoryCode = 'CH-CDJ')
															-- Linked to portal element "CATÉGORIE D'ÉPISODE"  (code)
	   REC.[Description] AS EncounterCategoryDesc,			-- Linked to portal element "CATÉGORIE D'ÉPISODE"  (description)
	   RET.Code AS EncounterTypeCode,						-- Linked to portal element "AMB AUTRES"  ("Amb autres" : EncounterTypeCode = 'E' AND EncounterCategoryCode <> 'CH-CDJ')
															-- Linked to portal element "COURTE DURÉE"  ("Courte durée" : EncounterTypeCode = 'A' AND EncounterCategoryCode = 'CH-CD')
															-- Linked to portal element "CDJ"  ("CDJ" : EncounterTypeCode = 'E' AND EncounterCategoryCode = 'CH-CDJ')
															-- Linked to portal element "URGENCE"  ("Urgence" : EncounterTypeCode = 'U')
															-- Linked to portal element "TYPE D'ÉPISODE"  (code)
	   RET.[Description] AS EncounterTypeDesc,				-- Linked to portal element "TYPE D'ÉPISODE"  (description)
	   RAS.Code AS AdmissionSourceCode,						-- Linked to portal element "TYPE DE PROVENANCE - ADMIS" (for admitted encounters - EncounterTypeCode = 'A')  (code)
	   RAS.[Description] AS AdmissionSourceDesc,			-- Linked to portal element "TYPE DE PROVENANCE - ADMIS" (for admitted encounters - EncounterTypeCode = 'A')  (description)
	   RASN.Code AS AdmissionSourceCode_Normalized,			
	   RASN.[Description] AS AdmissionSourceDesc_Normalized,
	   RAT.Code AS AdmissionTypeCode,						-- Linked to portal element "TYPE DE CLIENTELE (URGENCE)" (also named "AUTONOMIE APRES TRIAGE") (for emergency encounters - EncounterTypeCode = 'U')  (code)
	   RAT.[Description] AS AdmissionTypeDesc,				-- Linked to portal element "TYPE DE CLIENTELE (URGENCE)" (also named "AUTONOMIE APRES TRIAGE") (for emergency encounters - EncounterTypeCode = 'U')  (description)
	   RATN.Code AS AdmissionTypeCode_Normalized,			
	   RATN.[Description] AS AdmissionTypeDesc_Normalized,	
	   AE.Age,												-- Linked to portal element "AGE MOYEN"	(you have to calculate the average)									
	   RAGA.[Description] AS AgeGroup_Adult,				-- Linked to portal element "GROUPE D'AGE" (there are three)
	   RAGG.[Description] AS AgeGroup_Geriatric,			-- Linked to portal element "GROUPE D'AGE" (there are three)
	   RAGP.[Description] AS AgeGroup_Pediatric,			-- Linked to portal element "GROUPE D'AGE" (there are three)
	   RDD.Code AS DischargeDestinationCode,				-- Linked to portal element "DESTINATION"  (code)
															-- Linked to portal element "TYPE DE DESTINATION - ADMIS" (for admitted encounters - EncounterTypeCode = 'A')  (code)
															-- Linked to portal element "TYPE DE DESTINATION - URGENCE" (for emergency encounters - EncounterTypeCode = 'U')  (code)
	   RDD.[Description] AS DischargeDestinationDesc,		-- Linked to portal element "DESTINATION"  (description)
															-- Linked to portal element "TYPE DE DESTINATION - ADMIS" (for admitted encounters - EncounterTypeCode = 'A')  (description)
															-- Linked to portal element "TYPE DE DESTINATION - URGENCE" (for emergency encounters - EncounterTypeCode = 'U')  (description)
	   RDD.Code AS DischargeDestinationCode_Normalized,
	   RDD.[Description] AS DischargeDestinationDesc_Normalized,
	   RD.Code AS PrincipalDiagnosisCode,					-- Linked to portal element "DIAGNOSTIC PRINCIPAL"  (code)
	   RD.[Description] AS PrincipalDiagnosisDesc,			-- Linked to portal element "DIAGNOSTIC PRINCIPAL"  (description)
	   RDRG.Code AS DRG,									-- Linked to portal element "DRG"  (code)
	   RDRG.[Description] AS DRGDescription,				-- Linked to portal element "DRG"  (description)
	   RDRGT.Code AS DRGTypeCode,							-- Linked to portal element "CLASSE DE DRG"  (code)
	   RDRGT.[Description] AS DRGTypeDesc,					-- Linked to portal element "CLASSE DE DRG"  (description)
	   RDRGG.Code AS DRGGravityCode,						-- Linked to portal element "GRAVITE" or "GRAVITE CLINIQUE"  (code)
	   RDRGG.[Description] AS DRGGravityDesc,				-- Linked to portal element "GRAVITE" or "GRAVITE CLINIQUE"  (description)
	   REOC.Code AS EpisodeOfCareCode,						-- Linked to portal element "TYPE DE SOINS"  (code)
	   REOC.[Description] AS EpisodeOfCareDesc,				-- Linked to portal element "TYPE DE SOINS"  (description)
	   REOCN.Code AS EpisodeOfCareCode_Normalized,			
	   REOCN.[Description] AS EpisodeOfCareDesc_Normalized,	
	   RMDC.Code AS MDCCode,								-- Linked to portal element "CMD"  (code)
	   RMDC.[Description] AS MDCDesc,						-- Linked to portal element "CMD"  (description)
	   RP.Code AS PrincipalProcedureCode,					-- Linked to portal element "INTERVENTION PRINCIPALE"  (code)
	   RP.[Description] AS PrincipalProcedureDesc,			-- Linked to portal element "INTERVENTION PRINCIPALE"  (description)
	   RAP.Code AS AtypicalPatientCode,						-- Linked to portal element "TYP/ATYP"  (code)
	   RAP.[Description] AS AtypicalPatientDesc,			-- Linked to portal element "TYP/ATYP"  (description)
	   AE.LengthOfStay,										-- Linked to portal elements "DMS(jours)", "DMS(heures)" and "Équivalents-lits".
															    -- Values in this column are in days. 
															    -- "DMS(jours)" = LengthOfStay
															    -- "DMS(heures)" = LengthOfStay * 24.0
															    -- "Équivalents-lits" = LengthOfStay / 365.0
	   RMOA.Code AS ModeOfArrivalCode,						-- Linked to portal element "MODE D'ARRIVÉE - URGENCE"  (code)
	   RMOA.[Description] AS ModeOfArrivalDesc,				-- Linked to portal element "MODE D'ARRIVÉE - URGENCE"  (description)
	   AEE.NbrOfStretchers,									-- Linked to portal element "PATIENT SUR CIVIERE (URGENCE)"
															    -- (CASE WHEN AEE.NbrOfStretchers > 0 THEN 1 ELSE 0 END) AS 'Patient sur civiere (urgence)'
	   AEE.TotalHoursSpentOnStretcher,						-- Linked to portal element "EQUIVALENTS-CIVIERE"
	   RG.Code AS GenderCode,								-- Linked to portal element "SEXE"  (code)
	   RG.[Description] AS GenderDesc,						-- Linked to portal element "SEXE"  (code)
	   RM.Code AS MunicipalityCode,							-- Linked to portal element "MUNICIPALITÉ"
															-- Temporarily set to NULL for legal reasons
	   RR.Code AS RegionCode,								-- Linked to portal elements "RÉGION SOCIO-SANITAIRE DE RÉSIDENCE" and "RÉGION DE PROVENANCE"  (code)
															-- Temporarily set to NULL for legal reasons
	   RR.[Description] AS RegionDesc,						-- Linked to portal elements "RÉGION SOCIO-SANITAIRE DE RÉSIDENCE" and "RÉGION DE PROVENANCE"  (description)
															-- Temporarily set to NULL for legal reasons
	   RT.Code AS TerritoryCode,							-- Linked to portal element "RLS"  (code)
															-- Temporarily set to NULL for legal reasons
	   RT.[Description] AS TerritoryDesc,					-- Linked to portal element "RLS"  (description)
															-- Temporarily set to NULL for legal reasons
	   RCT.Code AS CLSCTerritoryCode,						-- Linked to portal element "TERRITOIRE CLSC"  (code)
															-- Temporarily set to NULL for legal reasons
	   RCT.[Description] AS CLSCTerritoryDesc,				-- Linked to portal element "TERRITOIRE CLSC"  (description)
															-- Temporarily set to NULL for legal reasons
	   AE.PostCode											-- Temporarily set to NULL for legal reasons
FROM Activity_Encounter AE
INNER JOIN CostingDataSet_Encounter CDE ON CDE.Encounter_Id = AE.Id
INNER JOIN Establishment_CostingDataSet ECD ON ECD.Id = CDE.Establishment_CostingDataSet_Id
INNER JOIN Ref_EncounterType RET ON RET.Id = AE.EncounterType_Id
INNER JOIN Ref_Establishment RE ON RE.Id = AE.Establishment_Id
LEFT OUTER JOIN Ref_Hospital RH ON RH.Id = AE.Hospital_Id
LEFT OUTER JOIN Ref_AdmissionCategory RAC ON RAC.Id = AE.AdmissionCategory_Id
LEFT OUTER JOIN Ref_AdmissionCategoryNorm RACN ON RACN.Id = AE.AdmissionCategoryNorm_Id
LEFT OUTER JOIN Ref_EncounterCategory REC ON REC.Id = AE.EncounterCategory_Id
LEFT OUTER JOIN Ref_AdmissionSource RAS ON RAS.Id = AE.AdmissionSource_Id
LEFT OUTER JOIN Ref_AdmissionSourceNorm RASN ON RASN.Id = AE.AdmissionSourceNorm_Id
LEFT OUTER JOIN Ref_AdmissionType RAT ON RAT.Id = AE.AdmissionType_Id
LEFT OUTER JOIN Ref_AdmissionTypeNorm RATN ON RATN.Id = AE.AdmissionTypeNorm_Id
LEFT OUTER JOIN Ref_AgeGroup_Adult RAGA ON RAGA.Id = AE.AgeGroupAdult_Id
LEFT OUTER JOIN Ref_AgeGroup_Geriatric RAGG ON RAGG.Id = AE.AgeGroupGeriatric_Id
LEFT OUTER JOIN Ref_AgeGroup_Pediatric RAGP ON RAGP.Id = AE.AgeGroupPediatric_Id
LEFT OUTER JOIN Ref_DischargeDestination RDD ON RDD.Id = AE.DischargeDestination_Id
LEFT OUTER JOIN Ref_DischargeDestinationNorm RDDN ON RDDN.Id = AE.DischargeDestinationNorm_Id
LEFT OUTER JOIN Ref_Diagnosis RD ON RD.Id = AE.PrincipalDiagnosis_Id
LEFT OUTER JOIN Ref_DRG RDRG ON RDRG.Id = AE.DRG_Id
LEFT OUTER JOIN Ref_DRGType RDRGT ON RDRGT.Id = AE.DRGType_Id
LEFT OUTER JOIN Ref_DRGGravity RDRGG ON RDRGG.Id = AE.DRGGravity_Id
LEFT OUTER JOIN Ref_EpisodeOfCare REOC ON REOC.Id = AE.EpisodeOfCare_Id
LEFT OUTER JOIN Ref_EpisodeOfCareNorm REOCN ON REOCN.Id = AE.EpisodeOfCareNorm_Id
LEFT OUTER JOIN Ref_MDC RMDC ON RMDC.Id = AE.MDC_Id
LEFT OUTER JOIN Ref_Procedure RP ON RP.Id = AE.PrincipalProcedure_Id
LEFT OUTER JOIN Ref_Gender RG ON RG.Id = AE.Gender_Id
LEFT OUTER JOIN Ref_Municipality RM ON RM.Id = AE.Municipality_Id
LEFT OUTER JOIN Ref_Region RR ON RR.Id = AE.Region_Id
LEFT OUTER JOIN Ref_Territory RT ON RT.Id = AE.Territory_Id
LEFT OUTER JOIN Ref_CLSCTerritory RCT ON RCT.Id = AE.CLSCTerritory_Id
LEFT OUTER JOIN Ref_AtypicalPatient RAP ON RAP.Id = AE.AtypicalPatient_Id
LEFT OUTER JOIN Activity_EmergencyEncounter AEE ON AEE.Encounter_Id = AE.Id		-- The "Activity_EmergencyEncounter" table is an extension table which has a 0:1 relationship with "Activity_Encounter"
LEFT OUTER JOIN Ref_ModeOfArrival RMOA ON RMOA.Id = AEE.ModeOfArrival_Id




-- ***************
-- ***  Costs  ***
-- ***************
-- THIS SELECT RETURNS ONE ROW PER EPISODE PER FINANCIAL YEAR.
-- ONLY ONE FINANCIAL YEAR HAS BEEN LOADED IN THE DATABASE PRESENTLY (2016-2017)
SELECT CDE.Encounter_Id,	-- Has to be linked to the result of the "Episodes" query  (Episodes.Activity_Encounter_Id = Costs.Encounter_Id)
	   CDE.DirectCost,		-- Linked to portal element "TYPE DE COUTS"
							--    (there are three types of costs: Direct costs (Coût direct), indirect costs (Coût indirect) and total costs (Coût total))
	   CDE.IndirectCost,	-- Linked to portal element "TYPE DE COUTS"
	   CDE.TotalCost,		-- Linked to portal elements "TYPE DE COUTS", "COUT MOYEN" and "COUT TOTAL"
	   ECD.FinancialYear	-- Linked to portal element "EXERCICE FINANCIER"
FROM Establishment_CostingDataSet ECD
INNER JOIN CostingDataSet_Encounter CDE ON CDE.Establishment_CostingDataSet_Id = ECD.Id









-- ***********************************************************************
-- ***  OTHER QUERIES (NOT NECESSARY FOR TILES 1 AND 2 OF THE PORTAL)  ***
-- ***********************************************************************

-- *******************
-- ***  Diagnoses  ***
-- *******************
-- Notes:
--     - Diagnoses are now present in the "Activity_CodingDiagnosis" table (which can be linked to the "Activity_Encounter" table - to find encounter information) and to the "Ref_Diagnosis" reference table.
--     - Diagnoses versions (named "Version de la condification") are NOT present in the database anymore.
--     - Diagnoses can be linked to a Costing Dataset via the "CostingDataset_Encounter" table (WARNING: The JOIN on the "CostingDataset_Encounter" table can multiply rows returned by the query below for
--	     episodes that span two or more financial years)
--     - If you only need to retrieve the principal diagnosis, please note that you can use the "Activity_Encounter.PrincipalDiagnosis_Id" field (which is a foreign key linked to the "Ref_Diagnosis" table)
SELECT RE.Id AS Establishment_Id,						-- New field
	   RE.Code AS EstablishmentCode,					-- New field
	   RE.CPSSDescription AS EstablishmentDescription,	-- New field
	   ECD.Id AS Establishment_CostingDataset_Id,	-- New field
	   ECD.CostingDataSetName,						-- Previously named "Modelisation de couts"
	   ECD.CostingDataSet_localNumber,				-- Previously named "Modelisation de cout Id"
	   ACD.Id AS Activity_CodingDiagnosis_Id,		-- Primary key of the "Activity_CodingDiagnosis" table
	   ACD.Encounter_Id,							-- Foreign key used to link this table to the "Activity_Encounter" table (previously named "Numero d'episode")
	   RD.Code AS DiagnosisCode,					-- Previously named "Code de diagnostic"
	   RD.[Description] AS DiagnosisDescription,
	   ACD.DiagnosisType,							-- Previously named "Code de type de diagnostic"
	   ACD.[Sequence]								-- Previously named "Numero sequentiel"
FROM Activity_CodingDiagnosis ACD
INNER JOIN Ref_Diagnosis RD ON RD.Id = ACD.Diagnosis_Id
INNER JOIN CostingDataSet_Encounter CDE ON CDE.Encounter_Id = ACD.Encounter_Id				-- Optional (only if you need to get Costing Dataset information)
INNER JOIN Establishment_CostingDataSet ECD ON ECD.Id = CDE.Establishment_CostingDataSet_Id	-- Optional (only if you need to get Costing Dataset information)
INNER JOIN Ref_Establishment RE ON RE.Id = ECD.Establishment_Id



-- *************
-- ***  DRG  ***
-- *************
-- Notes:
--     - The "DRGVersion" field is NOT present in the database anymore
SELECT DRG.Code,
	   DRG.[Description],
	   MDC.Code AS MDCCode,
	   MDC.[Description] AS MDCDescription,
	   DRGType.Code AS DRGTypeCode,
	   DRGType.[Description] AS DRGTypeDescription
FROM Ref_DRG DRG
LEFT OUTER JOIN Ref_DRGType DRGType ON DRGType.Id = DRG.DRGType_Id
LEFT OUTER JOIN Ref_MDC MDC ON MDC.Id = DRG.MDC_Id










-- **********************
-- ***  Intervention  ***
-- **********************
-- Notes:
--     - Procedures are now present in the "Activity_CodingProcedure" table (which can be linked to the "Activity_Encounter" table - to find encounter information) and to the "Ref_Procedure" reference table.
--     - Procedures versions (named "Version de la condification") are NOT present in the database anymore.
--     - Procedures can be linked to a Costing Dataset via the "CostingDataset_Encounter" table (WARNING: The JOIN on the "CostingDataset_Encounter" table can multiply rows returned by the query
--       below for episodes that span two or more financial years)
--     - If you only need to retrieve the principal procedure, please note that you can use the "Activity_Encounter.PrincipalProcedure_Id" field (which is a foreign key linked to the "Ref_Procedure" table)
SELECT RE.Id AS Establishment_Id,
	   RE.Code AS EstablishmentCode,
	   RE.CPSSDescription AS EstablishmentDescription,
	   ECD.Id AS Establishment_CostingDataset_Id,
	   ECD.CostingDataSetName,						-- Previously named "Modelisation de couts"
	   ECD.CostingDataSet_localNumber,				-- Previously named "Modelisation de cout Id"
	   ACP.Id AS Activity_CodingProcedure_Id,		-- Primary key of the "Activity_CodingProcedure" table
	   ACP.Encounter_Id,							-- Foreign key used to link this table to the "Activity_Encounter" table (previously named "Numero d'episode")
	   ACP.[Sequence],								-- Previously named "Numero sequentiel"
	   RP.Code AS ProcedureCode,					-- Previously named "Code d'intervention"
	   RP.[Description] AS ProcedureDescription,
	   ACP.ProcedureDateTime,						-- Previously named "Date et heure de l'intervention"
	   ACP.ProcedureType							-- Previously named "Type d'intervention"
FROM Activity_CodingProcedure ACP
INNER JOIN Ref_Procedure RP ON RP.Id = ACP.Procedure_Id
INNER JOIN CostingDataSet_Encounter CDE ON CDE.Encounter_Id = ACP.Encounter_Id				-- Optional (only if you need to get Costing Dataset information)
INNER JOIN Establishment_CostingDataSet ECD ON ECD.Id = CDE.Establishment_CostingDataSet_Id	-- Optional (only if you need to get Costing Dataset information)
INNER JOIN Ref_Establishment RE ON RE.Id = ECD.Establishment_Id



-- *****************
-- ***  Patient  ***
-- *****************
-- Notes:
--    - WARNING: 
--          There is no information about costing datasets in this query: a JOIN on the "Activity_Encounter" and "CostingDataSet_Encounter" tables would multiply the number of rows if a patient
--			has had several encounters or if an encounter (episode) spans two financial years. For this reason, I recommend that you load the tables
--			(patient, episodes and "CostingDataSet_Encounter") separately into Qlik Sense.
--    - The "Id" field should be used as a unique identifier
--    - Local patient number has been set momentarity removed for legal reasons and is not needed by the portal, so it is not present here
--    - The "Profil Iso-SMAF" field is NOT present in the database anymore (and is not needed by the portal)
SELECT AP.Id AS Activity_Patient_Id,						-- Patient ID (primary key of the "Activity_Patient" table)
	   RE.Id AS Establishment_Id,
	   RE.Code AS EstablishmentCode,
	   RE.CPSSDescription AS EstablishmentDescription,
	   AP.LocalPatientNumber,								-- Previously named "Identifiant unique PPM". Has been temporarily removed for legal reasons (should not be needed by the portal, though)
	   AP.DateOfBirth,										-- Has been temporarily set to NULL for legal reasons (should not be needed by the portal, though)
	   RG.Code AS GenderCode,								-- Previously named "Sexe"
	   RG.[Description] AS GenderDescription,				-- Previously named "Sexe Description"
	   RGN.Code AS GenderCode_Normalized,					-- New field
	   RGN.[Description] AS GenderDescription_Normalized	-- New field
FROM Activity_Patient AP
INNER JOIN Ref_Establishment RE ON RE.Id = AP.Establishment_Id
LEFT OUTER JOIN Ref_Gender RG ON RG.Id = AP.Gender_Id
LEFT OUTER JOIN Ref_GenderNorm RGN ON RGN.Id = AP.GenderNorm_Id		-- Normalized genders (this table was NOT present in the CSV files)



-- ************************
-- ***  ServiceSummary  ***
-- ************************
-- Notes:
--    - There will be a field "ServiceSummary.Establishment_CostingDataSet_Id" in the next version of the database (that will be available next week) and this field will be used 
--      to link service costs to the right Costing Dataset. In the meantime, we need to use the "CostingDataset_Encounter" table.
--    - The field "Code d'annulation" is not part of the database
SELECT SS.Id AS ServiceSummary_Id,		-- Primary key of the "ServiceSummary" table
	   ECD.CostingDataSetName,			-- Previously named "Modelisation de couts"
	   ECD.CostingDataSet_localNumber,	-- Previously named "Modelisation de couts Id"
	   SS.Encounter_Id,					-- Previously named "Numero d'episode"
	   RSD.Code AS ServicingDepartmentCode,
	   RSD.[Description] AS ServicingDepartmentDescription,	-- Previously named "Departement procurant les services"
	   SS.NumberOfServices,				-- Previously named "Nombre de services"
	   SS.NumberOfDifferentServices,	-- New field
	   SS.NumberOfWeightedProcedures,	-- New field. Not populated for the moment
	   SS.TotalQuantity,				-- Previously named "Quantite totale"
	   SS.TotalDuration,				-- Previously named "Duree totale"
	   SS.TotalCost_actual,				-- Previously named "Total des frais reels"
	   SS.TotalCost,					-- Previously named "Couts total"
	   SS.DirectCost,					-- Previously named "Couts directs"
	   SS.IndirectCost					-- Previously named "Couts indirects"
FROM ServiceSummary SS
INNER JOIN CostingDataset_Encounter CDE ON CDE.Encounter_Id = SS.Encounter_Id
INNER JOIN Establishment_CostingDataSet ECD ON ECD.Id = CDE.Establishment_CostingDataSet_Id
LEFT OUTER JOIN Ref_ServicingDepartment RSD ON RSD.Id = SS.ServicingDepartment_Id